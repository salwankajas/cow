'use client'
import {IoIosLogOut} from 'react-icons/io'
import {auth} from '@/components/login/signin'
import { useRouter } from 'next/navigation'
export default function Logout(props:{style:string}){
    const router = useRouter()
    const handleForm = ()=>{
        auth.signOut()
        router.push("/login")
    }
    return (
        <> 
            <div className={`bg-white leading-8 md:leading-9 px-2.5 text-[0.7rem] font-medium rounded-[8px] shadow cursor-pointer z-[5] ${props.style}`} onClick={handleForm}>
            <IoIosLogOut className='inline font-bold md:text-[1.2rem] text-[1rem]'/><h1 className='hidden md:inline-block mx-2'>Logout</h1>
            </div>
        </>
    )
}