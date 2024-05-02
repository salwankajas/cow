'use client'
import DisplayEvents from "../displayEvent/displayEvents";
import {readAnimal} from '../../app/dashboard/api/read';
import { useEffect, useState } from "react";
import {useAuthContext} from '@/context/AuthContext';
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
export default function Events(){
    const [data,setData] = useState<any>({})
    const [limit,setLimit] = useState(5)
    const [show,setShow] = useState(true)
    const { user } = useAuthContext();
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
        // readUserData(refreshingData,"events",props.soceity,limit);
        readAnimal(refreshingData,user.current.uid);
    },[limit])

    return(
        <>
            {data?<>{Object.keys(data).reverse().map((ele,i)=><DisplayEvents name={data[ele].name} id={data[ele].insurance} key={i} poster={data[ele].photo} insurance={data[ele].insurance} age={data[ele].age} breed={data[ele].breed} mark={data[ele].mark} checked={data[ele].checked} content={data[ele].checked?data[ele].medical:null} uid={user.current.uid} />)}</> : <></>}
            {/* {show?<div className="text-ms my-10 cursor-pointer flex justify-center items-center" onClick={()=>{setLimit((limit)=>limit+5)}}>Load More<RiArrowDownSLine className="mx-0.5" /></div>:<></>} */}
        </>
    )
};