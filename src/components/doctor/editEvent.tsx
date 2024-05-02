import { FiCheck, FiX } from "react-icons/fi"
import { addDescription } from "@/app/dashboard/api/edit"
import { useState } from "react"
import Image from "next/image"
import Invalid from "../login/invalid"
import LazyImage from "../img/lazyImage"
import test from "node:test"
import { time } from "node:console"
import {useAuthContext} from '@/context/AuthContext';
export default function EditEvent(props: { name: string, poster: string, insurance: string, age: number, mark: string, breed: string, editoff: () => void, id: string }) {
    const [invalid, setInvalid] = useState(false)
    const {name} = useAuthContext();
    const handleForm = (e: any) => {
        e.preventDefault()
        if (e.target.content.value) {
            const time = Date.now()
            console.log(name.current)
            addDescription({id:props.id,text:e.target.content.value,animal:props.insurance,time:time.toString(),doctor:name.current});
            props.editoff()
        } else {
            setInvalid(true)
            setTimeout(() => {
                setInvalid(false)
            }, 2000)
        }
    }
    return (
        <>
            <div className="text-white">
                <form onSubmit={handleForm}>
                    <div className="w-full mx-auto my-12== rounded-lg pb-3 md:w-full">
                        <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl"><LazyImage src={props.poster} alt="psoter" width="0" height="0" sizes="100vw" className="w-full h-auto" /></div>
                        <div className="text-center font-bold my-3"><div className="inline border-2 border-white rounded p-1 mx-1">{props.name}</div></div>
                        {/* <div className="inline mx-1">{props.insurance}</div></div> */}
                        <p className="break-all px-5 text-center font-bold text-xl">insurance: {props.insurance}</p>
                        <p className="break-all px-5 text-center font-bold text-xl">age: {props.age}</p>
                        <p className="break-all px-5 text-center font-bold text-xl">Identification Mark: {props.mark}</p>
                        <p className="break-all px-5 text-center font-bold text-xl">breed: {props.breed}</p>
                        <div className="justify-center flex">
                        <textarea className="inline-block focus:outline-none transition-all duration-200 focus:border-white focus:border-2 mx-auto h-auto bg-gray-600 text-white pl-2 placeholder:text-white w-9/12" name="content" rows={8} placeholder="Contents" required />
                        </div>
                    </div>
                    {invalid ? <Invalid strings="Poster Not Uploaded Or Uploading..." /> : <></>}
                    <div className="text-center mt-5">
                        <button className="bg-transparent shadow-none w-[auto]"><FiCheck className="inline text-2xl mx-auto font-thin stroke-[1.5]" /></button>
                        <FiX className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={() => { props.editoff() }} /></div>
                    {/* </div> */}
                    {/* </div> */}
                </form>
            </div>
        </>
    )
}