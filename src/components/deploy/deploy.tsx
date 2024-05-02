import { IoNotificationsOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useState } from 'react'
export default function Deploy() {
    return (
        <>
        <Link href={"/dashboard/notification"}>
            <div className="build_btn w-14 h-14 rounded-full bg-slate-200 fixed bottom-16 right-10 border-2 border-slate-800 flex justify-center items-center shadow-[0px_0px_10px_#c80120] cursor-pointer hover:rotate-[360deg] transition-all duration-500" title="Rebuild">
                <IoNotificationsOutline className='text-xl text-slate-800' />
            </div>
        </Link>
        </>
    )
}