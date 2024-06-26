'use client'
import { Suspense, useEffect } from "react"
import Events from "@/components/doctor/farmers";
import Button from "@/components/addEvent/button"
import { usePathname } from "next/navigation"
import Loading from "../loading"
export default function Page() {
    const pathname = usePathname().split('/')
    return (
        <>
            <Suspense fallback={<Loading/>}>
                {/* as{/* @ts-expect-error Server Component */}
                {/* <Button soceity={pathname[pathname.length -1]}/> */}
                <Events/>
            </Suspense>
        </>
    )
}