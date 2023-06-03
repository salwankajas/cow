import Image from "next/image";
import { FiEdit,FiTrash2} from "react-icons/fi"

export default function DisplayEvents(props: { name: string, poster: string ,day:number,month:string}) {
    return (
        <>
            <div className="my-24 text-white">
                <div className="w-11/12 mx-auto min-h-[24rem] my-12 bg-[rgba(57,176,255,0.6)] rounded-lg pb-3 shadow-lg md:w-8/12">
                    <div className="bg-gray-600 w-60 rounded-lg relative mx-auto bottom-[2rem] overflow-hidden shadow-2xl"><Image src={props.poster} alt="psoter" width="0" height="0" sizes="100vw" className="w-full h-auto"/></div>
                    <div className="text-center font-bold my-3"><div className="inline border-2 border-white rounded p-1 mx-1">{props.day}</div><div className="inline mx-1">{props.month}</div></div>
                    <p className="break-all px-5 text-center font-bold text-xl">{props.name}</p>
                    <div className="text-center mt-5"><FiEdit className="inline text-2xl mx-5 font-thin stroke-[1.5]" /><FiTrash2 className="inline inline text-2xl mx-5 stroke-[1.5]" /></div>
                </div>
            </div>
        </>
    )
}