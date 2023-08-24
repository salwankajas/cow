import Image from "next/image"
import Slider from "../../components/dashboard/slider"
import Dragon from "../../../public/asset/dragon_black.png"
// import Button from "@/components/addEvent/button"
import Logout from "@/components/logout/logout"
import Dropdown from "@/components/dashboard/dropdown"
export const metadata = {
  title: 'Dashboard'
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full md:w-[calc(100%-7rem)] fixed md:right-0 md:h-[max(100vh,580px)] p-10 h-[calc(100vh-3.5rem)] z-[-1]">
        <div className="w-full h-full invert contrast-200">
          <Image src={Dragon} alt="Dragon" className="h-full w-full object-contain mx-auto" />
        </div>
      </div>
      <div className=" md:absolute md:w-[calc(100%-7rem)] md:right-0 pt-20">
        <div className="">
          <Logout style="fixed top-2 left-2 md:top-6 md:left-[140px]" />
          <Dropdown/>
          {/* <Button /> */}
        </div>
        {children}
        <div className="h-14 bottom-0 md:hidden"></div>
      </div>
      <Slider />
    </>
  )
}
