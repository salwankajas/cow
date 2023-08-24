import { FiCheck, FiX } from "react-icons/fi"
import { writeUserData } from "@/app/dashboard/api/write"
import { useState } from "react"
import Image from "next/image"
import Invalid from "../login/invalid"
export default function AddForm(props: { remove: (value: boolean) => boolean ,soceity:string}) {
    const [uploadedposter,setUploadedposter] = useState(false)
    const [uploadingposter,setUploadingposter] = useState(false)
    const [invalid,setInvalid] = useState(false)
    const [posterurl,setPosterurl] = useState("")
    const uploadImage = (e:any)=>{
        // console.log(e.target.files[0])
        const formData = new FormData();
        formData.append("image",e.target.files[0])
        setUploadedposter(false)
        setUploadingposter(true)
        fetch("https://api.imgur.com/3/image/",{
            method: "post",
            headers: {
                Authorization: "Client-ID c893c9b6b15ef9d",
            },
            body:formData
        }).then(data=>data.json()).then(data=>{if(data.data.link!=null){setUploadedposter(true);setPosterurl(data.data.link);setUploadingposter(false);}}).catch(e=>console.log(e))
    }
    const handleForm = (e:any)=>{
        e.preventDefault()
        if(!uploadingposter && uploadedposter){
            writeUserData({poster:posterurl,type:"gallery",soceity:props.soceity})
            props.remove(false)
        }else{
            setInvalid(true)
            setTimeout(()=>{
                setInvalid(false)
            },2000)
        }
        }
    return (
        <>
            <div className="my-24 text-white">
                <form onSubmit={handleForm}>
                    <div className="w-11/12 mx-auto my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                        <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl h-64 min-h-full">
                            {uploadedposter?<Image src={`${posterurl}`} alt="poster" width={0} height={0} sizes="100vw" className="absolute w-full h-full opacity-50"/>:<></>}
                            <label className="flex w-full h-full mx-auto text-lg rounded shadow-lg cursor-pointer text-center">
                                <span className="m-auto z-[2]">Upload Image</span>
                                <input name='poster' type="file" className="hidden" required onChange={uploadImage}/>
                            </label>
                        </div>
                        <div className="text-center w-10/12 mx-auto">
                            {invalid?<Invalid strings="Image Not Uploaded Or Uploading..."/>:<></>}
                            <div className="text-center mt-5">
                                <button className="bg-transparent shadow-none w-[auto]"><FiCheck className="inline text-2xl mx-auto font-thin stroke-[1.5]"/></button>
                                <FiX className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={() => { props.remove(false) }} /></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}