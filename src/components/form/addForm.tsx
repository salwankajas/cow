import { FiCheck, FiX } from "react-icons/fi"
export default function AddForm(props: { remove: (value: boolean) => boolean }) {
    return (
        <>
            <div className="my-24 text-white">
                <form>
                    <div className="w-11/12 mx-auto my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                        <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl h-64 min-h-full">
                            <label className="flex w-full h-full mx-auto text-lg rounded shadow-lg cursor-pointer text-center">
                                <span className="m-auto">Upload Poster</span>
                                <input name='poster' type="file" className="hidden" required />
                            </label>
                        </div>
                        <div className="text-center w-10/12 mx-auto">
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Heading" required />
                            <div className="flex justify-between">
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="text" placeholder="Time" required />
                                <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-3/12 my-4 mx-0" type="number" name="day" placeholder="Day" />
                                <select className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 border-white border-b-2 rounded-none bg-transparent text-white pl-2 placeholder:text-white w-3/12 appearance-none shadow-none my-4 mx-0" name="month">
                                    <option value="Jan" >Jan</option>
                                    <option value="Feb" >Feb</option>
                                    <option value="March" >March</option>
                                    <option value="April" >April</option>
                                    <option value="Mat" >May</option>
                                    <option value="June" >June</option>
                                    <option value="Junly" >July</option>
                                    <option value="Aug" >Aug</option>
                                    <option value="Sept" >Sept</option>
                                    <option value="Oct" >Oct</option>
                                    <option value="Nov" >Nov</option>
                                    <option value="Dec" >Dec</option>
                                </select>
                            </div>
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Rules (optional)" />
                            <input className="inline-block focus:outline-none transition-all duration-200 focus:border-gray-500 mx-auto border-white border-b-2 bg-transparent text-white pl-2 placeholder:text-white w-full my-4" type="text" placeholder="Link" required />
                            <textarea className="inline-block focus:outline-none transition-all duration-200 focus:border-white focus:border-2 mx-auto h-auto bg-gray-600 text-white pl-2 placeholder:text-white w-full my-4" name="Content" rows={6} placeholder="Contents" required/>
                            <div className="text-center mt-5"><FiCheck className="inline text-2xl mx-5 font-thin stroke-[1.5]" /><FiX className="inline inline text-2xl mx-5 stroke-[1.5] cursor-pointer" onClick={() => { props.remove(false) }} /></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}