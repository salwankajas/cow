'use client'
import LazyImage from "../img/lazyImage";
import { FiEdit,FiTrash2} from "react-icons/fi"
// import Trash from "./trash";
import { useState } from "react";
import EditEvent from "./editEvent";
// import { writeUserData } from "@/app/dashboard/api/write";
// import { readUserData } from "@/app/dashboard/api/read";
export default function DoctorEdit(props: { name: string, poster: string ,age:number,insurance:string,mark:string,breed:string,id:string,checked?:boolean,content?:{descr:string,doctor:string,time:string}}) {
    const [trash,setTrash] = useState(false)
    const [edit,setEdit] = useState(false)
    const popOff = ()=>{
        setTrash(false)
    }
    const editOff = ()=>{
        setEdit(false)
    }
    const calDate = (timestamp:string)=>{
        const a = new Date(Number(timestamp))
        console.log(a)
        return `${a.getDate()}-${a.getMonth()+1}-${a.getFullYear()}`
    }
    return (
        <>
            <div className="my-24 text-white">
                <div className="w-11/12 mx-auto min-h-[24rem] my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                    {edit?<EditEvent name={props.name} poster={props.poster} mark={props.mark} insurance={props.insurance} id={props.id} breed={props.breed} age={props.age} editoff={editOff} /> :
                    <>
                    <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl"><LazyImage src={props.poster} alt="psoter" width="0" height="0" sizes="100vw" className="w-full h-auto"/></div>
                    <div className="text-center font-bold my-3"><div className="inline border-2 border-white rounded p-1 mx-1">{props.name}</div></div>
                    {/* <div className="inline mx-1">{props.insurance}</div></div> */}
                    <p className="break-all px-5 text-center font-base text-xl">insurance: {props.insurance}</p>
                    <p className="break-all px-5 text-center font-base text-xl">age: {props.age}</p>
                    <p className="break-all px-5 text-center font-base text-xl">Identification Mark: {props.mark}</p>
                    <p className="break-all px-5 text-center font-base text-xl">breed: {props.breed}</p>
                    {props.checked?
                        <div className="my-6 text-center text-grey font-bold">
                            <div className="font-bold text-xl my-4">Medical record by {props.content?.doctor} on {calDate(props.content?.time!)} </div>
                            <div className="px-10 text-center">{props.content?.descr}</div>
                            <div></div>
                        </div> 
                        :<></>}
                    <div className="text-center mt-5">
                        <FiEdit className="inline text-2xl mx-5 font-thin stroke-[1.5] cursor-pointer" onClick={()=>{setEdit(true)}}/> </div>
                    {/* <FiTrash2 className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={()=>{setTrash(true)}} /></div> */}
                    {/* {trash?<Trash popOff={popOff} id={props.id} soceity={props.soceity} />:""} */}
                    </>}
                    {/* } */}
                </div>
            </div>
        </>
    )
}