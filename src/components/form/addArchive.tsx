import { FiCheck, FiX } from "react-icons/fi"
import { writeUserData } from "@/app/dashboard/api/write"
export default function AddForm(props: { remove: (value: boolean) => boolean,soceity:string }) {
    const handleForm = (e:any)=>{
        e.preventDefault()
        writeUserData({heading:e.target.heading.value,day:e.target.day.value,month:e.target.month.value,year:e.target.year.value,content:e.target.content.value,type:"archives",soceity:props.soceity})
        props.remove(false)
        }
    return (
        <>
            <div className="my-24 text-white">
                <form onSubmit={handleForm}>
                    <div className="w-11/12 mx-auto my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                        <div className="text-center py-14 w-10/12 mx-auto">
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Heading" required name="heading"/>
                            <div className="flex justify-between">
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="day" placeholder="Day" max="31" min="1" />
                                <select className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 rounded-none bg-transparent text-white pl-2 placeholder:text-white w-3/12 appearance-none shadow-none my-4 mx-0" name="month">
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
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="year" placeholder="Year" required min="2023" max="2100"  />
                            </div>
                            <textarea className="inline-block focus:outline-none transition-all duration-200 focus:border-white focus:border-2 mx-auto h-auto bg-gray-600 text-white pl-2 placeholder:text-white w-full my-4" name="content" rows={6} placeholder="Contents" required/>
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