'use client'
import { Suspense, useEffect } from "react"
import Events from "./events"
import Button from "./button"
import { usePathname } from "next/navigation"
import Loading from "../loading"
import {useAuthContext} from '../../../context/AuthContext';
export default function Page() {
    const { user } = useAuthContext();
    useEffect(()=>{
        console.log(user.current.id)
    },[])
    const pathname = usePathname().split('/')
    return (
        <>
            <Suspense fallback={<Loading/>}>
                {/* as{/* @ts-expect-error Server Component */}
                <Button soceity={pathname[pathname.length -1]}/>
                <Events />
            </Suspense>
        </>
    )
}