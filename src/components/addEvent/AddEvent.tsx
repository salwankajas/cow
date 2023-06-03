import { VscAdd } from 'react-icons/vsc';
import Link from 'next/link';
export default function AddEvent(props:{style:string,onClick:()=>void}){
    return (
        <>
            <div className={`bg-white leading-8 md:leading-9 px-2.5 text-[0.7rem] font-medium rounded-[8px] shadow cursor-pointer z-[5] ${props.style}`} onClick={props.onClick} ><VscAdd className='inline font-bold md:text-[1.2rem] text-[1rem]'/></div>
        </>
    )
}