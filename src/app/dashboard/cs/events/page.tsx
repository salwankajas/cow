import { Suspense } from "react"
import Events from "@/components/addEvent/events"
import Loading from "../../loading"
export default function Cs() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                {/* @ts-expect-error Server Component */}
                <Events/>
            </Suspense>
        </>
    )
}