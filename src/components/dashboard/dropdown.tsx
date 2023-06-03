'use client'
import { useEffect, useRef, useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
export default function Dropdown(){
    const list = ["archives","events","gallery"]
    const pathname= usePathname()
    let menu:string[]=[];
    (()=>{
        let a=1;
        list.forEach(e=>{
            if(e==pathname.split("/")[3]){
                menu[0]=e;
            }else{
                menu[a]=e
                a=a+1
            }
        })
    })()
    const [hidden,_setHidden] = useState(true)
    const hiddenRef = useRef(hidden)
    const setHidden = (value:boolean)=>{
        hiddenRef.current = value
        _setHidden(value)
    }
    useEffect(()=>{
        const dropdown = document.querySelector(".dropdown-menu")
        const dropdownList = document.querySelector(".dropdown-menu-list")
        dropdownList?.classList.add("hidden")
        setHidden(true)
        function drop(){
            if(hiddenRef.current){
                setHidden(false)
                dropdownList?.classList.remove("hidden")
                dropdownList?.classList.add("block")
            }else{
                setHidden(true)
                dropdownList?.classList.remove("block")
                dropdownList?.classList.add("hidden")
            }
        }
        dropdown?.addEventListener('click',drop)
        return ()=>dropdown?.removeEventListener('click',drop)
    },[pathname])
    return (
        <>
            <div className="capitalize bg-white leading-8 md:leading-9 text-[0.7rem] font-medium rounded-[8px] shadow cursor-pointer z-[5] w-24 fixed top-2 left-[50%] md:top-6 translate-x-[-50%] md:left-[50%] md:translate-x-[0%] overflow-hidden" >
            <div className='dropdown-menu w-full text-center hover:bg-gray-100'><h1 className='inline-block'>{menu[0]}</h1><AiOutlineDown className='inline-block ml-1'/></div>
                <div className='border-b-[1px]'></div>
                <div className="dropdown-menu-list hidden">
                <Link href={`/dashboard/${pathname.split("/")[2]}/${menu[1]}`}><h1 className='inline-block hover:bg-gray-100 w-full text-center'>{menu[1]}</h1></Link>
                <div className='border-b-[1px]'></div>
                <Link href={`/dashboard/${pathname.split("/")[2]}/${menu[2]}`}><h1 className='inline-block hover:bg-gray-100 text-center w-full'>{menu[2]}</h1></Link>
                </div>              
                {/* <div className='border-b-[1px]'></div> */}
            </div>
        </>
    )
}