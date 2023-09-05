'use client'
import DisplayEvents from "../displayEvent/displayEvents";
import {readUserData} from '../../app/dashboard/api/read';
import { useEffect, useState } from "react";
import {RiArrowDownSLine} from 'react-icons/ri'

interface Events {
    _id:string;
    owner: string;
    poster: string;
    heading: string;
    time:string;
    day: number;
    month: string;
    vanue: string;
    content: string;
    link: string;
}
export default function Events(props:{soceity:string}){
    const [data,setData] = useState<any>({})
    const [limit,setLimit] = useState(5)
    const [show,setShow] = useState(true)
    const refreshingData = (datas:any)=>{
        try{
            if((Object.keys(datas).length - Object.keys(data).length)<5){
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
        readUserData(refreshingData,"events",props.soceity,limit);
    },[limit])

    return(
        <>
            {data?<>{Object.keys(data).reverse().map((ele,i)=><DisplayEvents name={data[ele].heading} id={ele} key={i} poster={data[ele].poster} day={data[ele].day} month={data[ele].month} time={data[ele].time} link={data[ele].link} content={data[ele].content} vanue={data[ele].vanue} soceity={props.soceity} ids={data[ele].id} />)}</> : <></>}
            {show?<div className="text-ms my-10 cursor-pointer flex justify-center items-center" onClick={()=>{setLimit((limit)=>limit+5)}}>Load More<RiArrowDownSLine className="mx-0.5" /></div>:<></>}
        </>
    )
};