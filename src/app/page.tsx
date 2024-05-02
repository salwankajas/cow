import Link from "next/link"
import '@/styles/globals.css'
import ReactLoading from 'react-loading';
import Image from "next/image"
import Logo from "../../public/asset/logo.svg"
export default function Home() {
  return(

  <>

            <div className="login w-10/12 mx-auto h-max my-24 md:w-8/12 lg:w-4/12 2xl:w-3/12">
                <Link href={"/"}>
                <div>
                    <Image className="mx-auto " src={Logo} alt="Logo" width="180" height="180" />
                </div>
                </Link>
                <h1 className="text-center font-semibold my-6 text-2xl">Sign in</h1>
                <div className="mx-auto">
                    <Link href={"/login"}><div style={{color:"white"}} className="bg-blue-500 text-white font-semibold flex justify-center items-center rounded my-3 h-12" >Sign in</div></Link>
                    <Link href={"/register"}><div style={{color:"white"}} className="bg-blue-500 text-white font-semibold flex justify-center items-center rounded my-3 h-12" >Sign up</div></Link>
                </div>
                </div>
        </>
  )
}
