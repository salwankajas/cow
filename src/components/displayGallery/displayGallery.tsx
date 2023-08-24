'use client'
import LazyImage from "../img/lazyImage";
import {FiTrash2} from "react-icons/fi"
import Trash from "./trash";
import { useState } from "react";
export default function DisplayGallery(props: {poster: string ,id:string,soceity:string}) {
    const [trash,setTrash] = useState(false)
    const popOff = ()=>{
        setTrash(false)
    }
    function trash_hover_in(e:any){
        if(e.target.classList[0] == 'trash-hover-in'){
            e.target.nextSibling.classList.remove("hidden")
            e.target.nextSibling.classList.add("flex")
        }
    }
    function trash_hover_out(e:any){
        if(e.target.classList[0] == 'trash-hover-out'){
            e.target.classList.remove("flex")
            e.target.classList.add("hidden")
        }
    }
    return (
        <>
            <div className="my-24 text-white">
                    <div className="bg-gray-600 w-[70vw] rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl md:w-[420px] cursor-pointer transition-all" onMouseEnter={trash_hover_in} onMouseLeave={trash_hover_out}>
                        <LazyImage src={props.poster} alt="poster" width="0" height="0" sizes="100vw" className="trash-hover-in w-full h-auto" />
                    <div className="trash-hover-out text-center bg-[rgba(15,23,42,0.8)] h-full w-full justify-center items-center absolute top-0 hidden" onClick={()=>{setTrash(true)}}><FiTrash2 className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" /></div>
                    </div>
                    {trash?<Trash popOff={popOff} id={props.id} soceity={props.soceity} />:""}
            </div>
        </>
    )
}