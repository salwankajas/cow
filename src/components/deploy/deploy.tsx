'use client'
import { BsRocket } from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
export default function Deploy() {
    const [show, setShow] = useState(true)
    let pathname = usePathname()
    const token = "5cOkCSUOVswxRh66ep2OKMbU";
    function handleClicks(ele:any) {
        const events = pathname.split("/").slice(-1)[0]
        let deploy;
        let data: any;
        if (events == "sb") {
            deploy = "dpl_9eHFhTcgx294E17SntnagGWDrNYN"
            data = `{"deploymentId":"${deploy}","meta":{"action":"redeploy"},"name":"ieeesb","target":"production"}`
        } else if (events == "cs") {
            deploy = "dpl_2Xy9ArZwzHGBXiaRz98m8V2qWXy4"
            data = `{"deploymentId":"${deploy}","meta":{"action":"redeploy"},"name":"ieeecs","target":"production"}`
        }
        fetch("https://api.vercel.com/v6/deployments", {
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            "method": "get"
        }).then((e) => e.json()).then((s) => {
            if (s.deployments[0].state != "BUILDING" && s.deployments[0].state != "QUEUED") {
                fetch("https://api.vercel.com/v13/deployments", {
                    "headers": {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    "body": data,
                    "method": "post"
                })
                document.querySelector(".build_btn")?.classList.remove("shadow-[0px_0px_10px_#06c0ff]")
                document.querySelector(".build_btn")?.classList.remove("shadow-[0px_0px_10px_#ff0606]")
                document.querySelector(".build_btn")?.classList.add("shadow-[0px_0px_10px_#3fd200]")
                setTimeout(()=>{
                    document.querySelector(".build_btn")?.classList.remove("shadow-[0px_0px_10px_#3fd200]")
                    document.querySelector(".build_btn")?.classList.add("shadow-[0px_0px_10px_#06c0ff]")
                },3000)
            } else {
                document.querySelector(".build_btn")?.classList.remove("shadow-[0px_0px_10px_#06c0ff]")
                document.querySelector(".build_btn")?.classList.remove("shadow-[0px_0px_10px_#3fd200]")
                document.querySelector(".build_btn")?.classList.add("shadow-[0px_0px_10px_#ff0606]")
                setTimeout(()=>{
                    document.querySelector(".build_btn")?.classList.remove("shadow-[0px_0px_10px_#ff0606]")
                    document.querySelector(".build_btn")?.classList.add("shadow-[0px_0px_10px_#06c0ff]")
                },3000)
                console.log("Busy in building...")
            }
        })
    }

    return (
        <>
            <div className="build_btn w-14 h-14 rounded-full bg-slate-200 fixed bottom-16 right-10 border-2 border-slate-800 flex justify-center items-center shadow-[0px_0px_10px_#06c0ff] cursor-pointer hover:rotate-[360deg] transition-all duration-500" onClick={handleClicks} title="Rebuild">
                <BsRocket className='text-xl text-slate-800' />
            </div>
        </>
    )
}