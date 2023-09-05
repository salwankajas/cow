'use client'
import LazyImage from "../img/lazyImage";
import { FiEdit,FiTrash2} from "react-icons/fi"
import Trash from "./trash";
import { useState } from "react";
import EditEvent from "./editEvent";
// import { writeUserData } from "@/app/dashboard/api/write";
// import { readUserData } from "@/app/dashboard/api/read";
export default function DisplayEvents(props: { name: string, poster: string ,day:number,month:string,id:string,time:string,link:string,content:string,vanue:string,soceity:string,ids:string}) {
    const [trash,setTrash] = useState(false)
    const [edit,setEdit] = useState(false)
    const popOff = ()=>{
        setTrash(false)
    }
    const editOff = ()=>{
        setEdit(false)
    }
    return (
        <>
            <div className="my-24 text-white">
                <div className="w-11/12 mx-auto min-h-[24rem] my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                    {edit?<EditEvent name={props.name} poster={props.poster} day={props.day} month={props.month} id={props.id} editoff={editOff} time={props.time} link={props.link} content={props.content} vanue={props.vanue} soceity={props.soceity} ids={props.ids}/>:
                    <>
                    <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl"><LazyImage src={props.poster} alt="psoter" width="0" height="0" sizes="100vw" className="w-full h-auto"/></div>
                    <div className="text-center font-bold my-3"><div className="inline border-2 border-white rounded p-1 mx-1">{props.day}</div><div className="inline mx-1">{props.month}</div></div>
                    <p className="break-all px-5 text-center font-bold text-xl">{props.name}</p>
                    <div className="text-center mt-5"><FiEdit className="inline text-2xl mx-5 font-thin stroke-[1.5] cursor-pointer" onClick={()=>{setEdit(true)}}/><FiTrash2 className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={()=>{setTrash(true)}} /></div>
                    {trash?<Trash popOff={popOff} id={props.id} soceity={props.soceity} />:""}
                    </>}
                </div>
            </div>
        </>
    )
}