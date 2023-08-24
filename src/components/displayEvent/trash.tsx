'use client'

import { useEffect } from "react"
import { FiCheck, FiX } from "react-icons/fi"
import removes from "@/app/dashboard/api/remove"
export default function Trash(props:{popOff:()=>void,id:string,soceity:string}){
    useEffect(()=>{
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.querySelector<HTMLElement>('.trash')!.style.marginTop = `${document.documentElement.scrollTop || document.body.scrollTop}px`
        return()=>{
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        }
    })
    return(
        <>
            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-screen bg-[rgba(241,245,249,0.4)] trash z-[2]">
                <div className="w-10/12 h-[120px] bg-white rounded-xl md:w-7/12">
                    <h1 className="text-black font-medium text-lg text-center my-2">Are you Sure?</h1>
                    <div className="text-center mt-5 text-black">
                        <button className="bg-transparent shadow-none w-[auto] mx-5" onClick={()=>{removes(props.id,"events",props.soceity);props.popOff()}}><FiCheck className="inline text-2xl mx-auto font-thin stroke-[1.5]"/></button>
                        <button className="bg-transparent shadow-none w-[auto] mx-5"><FiX className="inline inline text-2xl mx-auto stroke-[1.5] cursor-pointer" onClick={() => {props.popOff()}} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}