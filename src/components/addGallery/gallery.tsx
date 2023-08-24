'use client'
import DisplayGallery from "../displayGallery/displayGallery";
import {readUserData} from '../../app/dashboard/api/read';
import { useEffect, useState } from "react";
import {RiArrowDownSLine} from 'react-icons/ri'

export default function Galley(props:{soceity:string}){
    const [data,setData] = useState<any>({})
    const [limit,setLimit] = useState(5)
    const [show,setShow] = useState(true)
    const refreshingData = (datas:any)=>{
        try{
            if((Object.keys(datas).length - Object.keys(data).length) <5){
                setShow(false)
            }
        }catch{
            setShow(false)
            setData(datas);
            return;
        }
        if(Object.keys(data).length!=Object.keys(datas).length){
            setData(datas);
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(()=>{
        readUserData(refreshingData,"gallery",props.soceity,limit);
    },[limit])

    return(
        <>
            {data?<>{Object.keys(data).reverse().map((ele,i)=><DisplayGallery id={ele} key={i} poster={data[ele].image} soceity={props.soceity} />)}</> : <></> }
            {show?<div className="text-ms my-10 cursor-pointer flex justify-center items-center" onClick={()=>{setLimit((limit)=>limit+5)}}>Load More<RiArrowDownSLine className="mx-0.5" /></div>:<></>}
        </>
    )
};