// 'use client'
import Image from "next/image"
import Slider from "../../components/dashboard/slider"
import Dragon from "../../../public/asset/cow.svg"
import Deploy from "@/components/deploy/deploy"
import Logout from "@/components/logout/logout"
import Button from "@/components/addEvent/button"
import Dropdown from "@/components/dashboard/dropdown"
import { useEffect } from "react"
import { usePathname } from 'next/navigation';
import {db} from "../../firebase/config";
import { headers } from "next/headers";
import { doc, getDoc } from "firebase/firestore";
export const metadata = {
  title: 'Dashboard'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(()=>{
  //   console.log("Sdfsf");
  //   const docRef = doc(db, "cities", "SF");
  //   getDoc(docRef).then((value)=>{
  //     console.log(value)
  //   })

  // },[])
  // const pathname = usePathname().split("/")[2]
  const heads = headers()
  const pathname = heads.get('referer')?.split("/")[4]
  return (
    <>
    {/* <Button soceity={pathname[pathname.length -1]}/> */}
      <div className="w-full md:w-[calc(100%-7rem)] fixed md:right-0 md:h-[max(100vh,580px)] p-10 h-[calc(100vh-3.5rem)] z-[-1]">
        <div className="w-full h-full invert contrast-200">
          <Image src={Dragon} alt="Dragon" className="h-full w-full object-contain mx-auto p-24" />
        </div>
      </div>
      <div className=" md:absolute md:w-[calc(100%-7rem)] md:right-0 pt-20">
        <div className="">
          <Logout style="fixed top-2 left-2 md:top-6 md:left-[140px]" />
          {/* <Dropdown/> */}
        </div>
        {children}
        <div className="h-14 bottom-0 md:hidden"></div>
      {pathname!="admin"&&pathname!="notification"?<Deploy /> : <></>}
      </div>
      {/* <Slider /> */}
    </>
  )
}
