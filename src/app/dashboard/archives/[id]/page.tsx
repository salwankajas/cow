'use client'
import { Suspense } from "react"
import Archives from "@/components/addArchive/archives"
import Button from "@/components/addArchive/button"
import { usePathname } from "next/navigation"
import Loading from "../../loading"
export default function Page() {
    const pathname = usePathname().split('/')
    return (
        <>
            <Suspense fallback={<Loading/>}>
                {/* as{/* @ts-expect-error Server Component */}
                <Button soceity={pathname[pathname.length -1]} />
                <Archives soceity={pathname[pathname.length -1]} />
            </Suspense>
        </>
    )
}