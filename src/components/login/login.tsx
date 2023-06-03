'use client'
import Image from "next/image"
import '../../styles/globals.css'
import Logo from "../../../public/asset/sb_black.png"
import {signIn} from './signin';
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext";
import ReactLoading from 'react-loading';
export default function Logins(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(true)
    const router = useRouter()
    const { user } = useAuthContext()
    const handleForm = async (event:any) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/dashboard/cs")
    }

    useEffect(()=>{
        if(!user){
            setLoading(false)
        }else{
            router.push("/dashboard/cs")
        }
    },[])
    return(
        <>{loading?<div className="flex justify-center items-center h-full"><ReactLoading type={"spinningBubbles"} color={"#666"} height={60} width={60}/></div> :
            <div className="login w-10/12 mx-auto h-max my-24 md:w-8/12 lg:w-4/12 2xl:w-3/12">
                <div>
                <Image className="mx-auto " src={Logo} alt="Logo" width="64" height="64"/>
                </div>
                <h1 className="text-center font-semibold my-6 text-2xl">Sign in</h1>
                <form className="mx-auto" onSubmit={handleForm}>
                    <input name="email" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    <input name="password" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Sign in" className="bg-blue-500 text-white font-semibold" />
                </form>
            </div>}
        </>
    )
}