'use client'
import Image from "next/image";
import { FiEdit,FiTrash2} from "react-icons/fi"
import Trash from "./trash";
import { useState } from "react";
import EditArchives from "./editArchives";
export default function DisplayArchives(props: { name: string,day:number,month:string,id:string,year:number,content:string,soceity:string}) {
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
                <div className="w-11/12 mx-auto min-h-[16rem] py-5 my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                    {edit?<EditArchives name={props.name} day={props.day} month={props.month} id={props.id} editoff={editOff} year={props.year} content={props.content} soceity={props.soceity} />:
                    <>
                    <div className="text-center font-bold my-3"><div className="inline border-2 border-white rounded p-1 mx-1">{props.day}</div><div className="inline mx-1">{props.month}</div><div className="inline mx-1">{props.year}</div></div>
                    <p className="break-all px-5 text-center font-bold text-xl">{props.name}</p>
                    <p className="px-12 my-5">{props.content}</p>
                    <div className="text-center my-5"><FiEdit className="inline text-2xl mx-5 font-thin stroke-[1.5] cursor-pointer" onClick={()=>{setEdit(true)}}/><FiTrash2 className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={()=>{setTrash(true)}} /></div>
                    {trash?<Trash popOff={popOff} id={props.id} soceity={props.soceity} />:""}
                    </>}
                </div>
            </div>
        </>
    )
}