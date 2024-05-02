'use client'
import Image from "next/image"
import '../../styles/globals.css'
import Logo from "../../../public/asset/logo.svg"
import { signIn } from './signin';
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext";
import ReactLoading from 'react-loading';
import Invalid from "./invalid";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Link from "next/link";
export default function Logins() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(false)
    const [selectedValue, setSelectedValue] = useState("farmer");

    const router = useRouter()
    const { user, setRole, role, name } = useAuthContext()
    const handleForm = async (event: any) => {
        event.preventDefault()
        const { result, error }:{result:any,error:any} = await signIn(email, password);
        setRole(selectedValue)
        console.log(role);
        if(result){

            const doctorRef = doc(db, selectedValue, result!.user.uid);
            getDoc(doctorRef).then((e) => {
                name.current =e.data()!["name"]
            })
        }

        if (error) {
            setInvalid(true)
            setTimeout(() => {
                setInvalid(false)
            }, 2000)
            return console.log("error")
        }

        // else successful
        // console.log(result)
        return router.push(`/dashboard/${selectedValue}`)
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    useEffect(() => {
        if (!user.current) {
            setLoading(false)
        } else {
            router.push(`/dashboard/${selectedValue}`)
        }
    }, [])
    return (
        <>{loading ? <div className="flex justify-center items-center h-full"><ReactLoading type={"spinningBubbles"} color={"#666"} height={60} width={60} /></div> :
            <div className="login w-10/12 mx-auto h-max my-24 md:w-8/12 lg:w-4/12 2xl:w-3/12">
                <Link href={"/"}>
                <div>
                    <Image className="mx-auto " src={Logo} alt="Logo" width="180" height="180" />
                </div>
                </Link>
                <h1 className="text-center font-semibold my-6 text-2xl">Sign in</h1>
                <form className="mx-auto" onSubmit={handleForm}>
                    <select value={selectedValue} onChange={handleChange} id="occupationSelect">
                        <option value="farmer">Farmer</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input name="email" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <input name="password" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Sign in" style={{color:"white"}} className="bg-blue-500 text-white font-semibold" />
                </form>
                {invalid ? <Invalid strings="Invalid username or password" /> : <></>}
            </div>}
        </>
    )
}