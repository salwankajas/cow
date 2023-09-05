import { FiCheck, FiX } from "react-icons/fi"
import { editUserData } from "@/app/dashboard/api/edit"
import { useState } from "react"
import Image from "next/image"
import Invalid from "../login/invalid"
export default function EditEvent(props: { name: string, poster: string ,day:number,month:string,id:string,editoff:()=>void,time:string,link:string,content:string,vanue:string,soceity:string,ids:string}){
    const [uploadedposter,setUploadedposter] = useState(true)
    const [uploadingposter,setUploadingposter] = useState(false)
    const [invalid,setInvalid] = useState(false)
    const [posterurl,setPosterurl] = useState(props.poster)

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
            editUserData({id:props.id,heading:e.target.heading.value,day:e.target.day.value,month:e.target.month.value,time:e.target.time.value,poster:posterurl,content:e.target.content.value,link:e.target.link.value,vanue:e.target.vanue.value?e.target.vanue.value:"null",type:"events",soceity:props.soceity,ids:e.target.ids.value})
            props.editoff()
        }else{
            setInvalid(true)
            setTimeout(()=>{
                setInvalid(false)
            },2000)
        }
        }
        function vanue(){
            if(props.vanue=='null')
            return ""
            else
            return props.vanue
        }
    return(
        <>
            <div className="text-white">
                <form onSubmit={handleForm}>
                    <div className="w-full mx-auto my-12== rounded-lg pb-3 md:w-full">
                        <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl h-64 min-h-full">
                            {uploadedposter?<Image src={`${posterurl}`} alt="poster" width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL="/assets/social.jpeg" className="absolute w-full h-full opacity-50"/>:<></>}
                            <label className="flex w-full h-full mx-auto text-lg rounded shadow-lg cursor-pointer text-center">
                                <span className="m-auto z-[2]">Upload Poster</span>
                                <input name='poster' type="file" className="hidden" onChange={uploadImage}/>
                            </label>
                        </div>
                        <div className="text-center w-10/12 mx-auto">
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Heading" required name="heading" defaultValue={props.name}/>
                            <div className="flex justify-between">
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="text" name="time" placeholder="Time" required defaultValue={props.time} />
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="day" placeholder="Day" defaultValue={props.day} max="31" />
                                <select className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 rounded-none bg-transparent text-white pl-2 placeholder:text-white w-3/12 appearance-none shadow-none my-4 mx-0" name="month" defaultValue={props.month} >
                                    <option value="Jan" >Jan</option>
                                    <option value="Feb" >Feb</option>
                                    <option value="Mar" >Mar</option>
                                    <option value="Apr" >Apr</option>
                                    <option value="May" >May</option>
                                    <option value="Jun" >Jun</option>
                                    <option value="Jul" >Jul</option>
                                    <option value="Aug" >Aug</option>
                                    <option value="Sept" >Sept</option>
                                    <option value="Oct" >Oct</option>
                                    <option value="Nov" >Nov</option>
                                    <option value="Dec" >Dec</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-2/12 my-4" type="text" name="ids" placeholder="id" required defaultValue={props.ids}/>
                            {/* <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-8/12 my-4" type="text" name="vanue" placeholder="Vanue (optional)"/>     */}
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-8/12 my-4" type="text" name="vanue" placeholder="Vanue (optional)" defaultValue={vanue()} />
                            </div>
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" name="link" placeholder="Link" required defaultValue={props.link}/>
                            <textarea className="inline-block focus:outline-none transition-all duration-200 focus:border-white focus:border-2 mx-auto h-auto bg-gray-600 text-white pl-2 placeholder:text-white w-full my-4" name="content" rows={6} placeholder="Contents" required defaultValue={props.content} />
                            {invalid?<Invalid strings="Poster Not Uploaded Or Uploading..."/>:<></>}
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