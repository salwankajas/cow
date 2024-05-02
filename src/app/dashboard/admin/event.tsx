import { FiCheck, FiX } from "react-icons/fi"
import { addAnimal, addNotification } from "@/app/dashboard/api/write"
import { useAuthContext } from '@/context/AuthContext';
import { useState } from "react"
import Image from "next/image"
import Invalid from "./invalid"
export default function AddForm(props: { remove: (value: boolean) => boolean, soceity: string }) {
    const [uploadedposter, setUploadedposter] = useState(false)
    const [uploadingposter, setUploadingposter] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [posterurl, setPosterurl] = useState("")
    const { user } = useAuthContext();
    const handleForm = (e: any) => {
        e.preventDefault()
        addNotification(e.target.content.value);
        props.remove(false)
    }
    return (
        <>
            <div className="my-24 text-white">
                <form onSubmit={handleForm}>
                    <div className="w-11/12 mx-auto my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                        {/* <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl h-64 min-h-full">
                            {uploadedposter?<Image src={`${posterurl}`} alt="poster" width={0} height={0} sizes="100vw" className="absolute w-full h-full opacity-50"/>:<></>}
                            <label className="flex w-full h-full mx-auto text-lg rounded shadow-lg cursor-pointer text-center">
                                <span className="m-auto z-[2]">Upload Image</span>
                                <input name='poster' type="file" className="hidden" required onChange={uploadImage}/>
                            </label>
                        </div> */}
                        <div className="text-center w-10/12 mx-auto">
                            {/* <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Insurance ID" required name="Insurance_ID"/>
                            <div className="flex justify-between">
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="text" name="names" placeholder="Name" required />
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="age" placeholder="Age" /> */}
                            {/* <select className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 rounded-none bg-transparent text-white pl-2 placeholder:text-white w-3/12 appearance-none shadow-none my-4 mx-0" name="month">
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
                                </select> */}
                            {/* </div> */}
                            {/* <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" name="mark" placeholder="Identification_Mark" required />
                            <div className="flex justify-between"> */}
                            {/* <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-2/12 my-4" type="text" name="ids" placeholder="id" required/> */}
                            {/* <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-8/12 my-4" type="text" name="breed" placeholder="breed"/>     */}
                            {/* </div> */}

                            <textarea className="inline-block focus:outline-none transition-all duration-200 focus:border-white focus:border-2 mx-auto h-auto bg-gray-600 text-white pl-2 placeholder:text-white w-full my-4" name="content" rows={6} placeholder="Contents" required />
                            {invalid ? <Invalid strings="Poster Not Uploaded Or Uploading..." /> : <></>}
                            <div className="text-center mt-5">
                                <button className="bg-transparent shadow-none w-[auto]"><FiCheck className="inline text-2xl mx-auto font-thin stroke-[1.5]" /></button>
                                <FiX className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={() => { props.remove(false) }} /></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}