import { FiCheck, FiX } from "react-icons/fi"
import { editUserData } from "@/app/dashboard/api/edit"
import { useState } from "react"
import Image from "next/image"
import Invalid from "../login/invalid"
export default function EditArchives(props: { name: string ,day:number,month:string,id:string,editoff:()=>void,year:number,content:string,soceity:string}){
    const handleForm = (e:any)=>{
        e.preventDefault()
        editUserData({id:props.id,heading:e.target.heading.value,day:e.target.day.value,month:e.target.month.value,year:e.target.year.value,content:e.target.content.value,type:"archives",soceity:props.soceity})
        props.editoff()
        }
    return(
        <>
            <div className="text-white">
                <form onSubmit={handleForm}>
                    <div className="w-full mx-auto my-12 rounded-lg pb-2 md:w-full">
                        <div className="text-center w-10/12 mx-auto">
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Heading" required name="heading" defaultValue={props.name}/>
                            <div className="flex justify-between">
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="day" placeholder="Day" defaultValue={props.day} max="31" min="1" />
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="year" placeholder="Year" required defaultValue={props.year} min="2023" max="2100" />
                                <select className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 rounded-none bg-transparent text-white pl-2 placeholder:text-white w-3/12 appearance-none shadow-none my-4 mx-0" name="month" defaultValue={props.month} >
                                    <option value="Jan" >Jan</option>
                                    <option value="Feb" >Feb</option>
                                    <option value="March" >March</option>
                                    <option value="April" >April</option>
                                    <option value="May" >May</option>
                                    <option value="June" >June</option>
                                    <option value="July" >July</option>
                                    <option value="Aug" >Aug</option>
                                    <option value="Sept" >Sept</option>
                                    <option value="Oct" >Oct</option>
                                    <option value="Nov" >Nov</option>
                                    <option value="Dec" >Dec</option>
                                </select>
                            </div>
                            <textarea className="inline-block focus:outline-none transition-all duration-200 focus:border-white focus:border-2 mx-auto h-auto bg-gray-600 text-white pl-2 placeholder:text-white w-full my-4" name="content" rows={6} placeholder="Contents" required defaultValue={props.content} />
                            <div className="text-center mt-5">
                                <button className="bg-transparent shadow-none w-[auto]"><FiCheck className="inline text-2xl mx-auto font-thin stroke-[1.5]"/></button>
                                <FiX className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={() => {props.editoff()}} /></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}