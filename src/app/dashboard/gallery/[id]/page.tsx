'use client'
import { Suspense } from "react"
import Gallery from "@/components/addGallery/gallery"
import Button from "@/components/addGallery/button"
import { usePathname } from "next/navigation"
import Loading from "../../loading"
export default function Page() {
    const pathname = usePathname().split('/')
    return (
        <>
            <Suspense fallback={<Loading/>}>
                {/* as{/* @ts-expect-error Server Component */}
                <Button soceity={pathname[pathname.length -1]} />
                <Gallery soceity={pathname[pathname.length -1]}/>
            </Suspense>
        </>
    )
}