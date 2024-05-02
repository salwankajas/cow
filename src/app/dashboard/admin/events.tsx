'use client'
import DisplayNotification from "./displayNotification";
import {readNotification} from '@/app/dashboard/api/read';
import { useEffect, useState } from "react";
import {useAuthContext} from '@/context/AuthContext';

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
    const [data,setData] = useState<any>([])
    var arr:[JSX.Element]=[<></>];
    const [limit,setLimit] = useState(5)
    const [show,setShow] = useState(true)
    // const { user } = useAuthContext();
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
        readNotification(refreshingData);
    },[limit])

    return(
        <>
        {/* [<DisplayFarmer name={"sfs"} email={"Sdf"} key={1} adhaar={"DSfsdf"}/>
        <DisplayFarmer name={"sfs"} email={"Sdf"} key={1} adhaar={"DSfsdf"}/>] */}
            {data?<>{
            data.forEach((ele,i)=>{
                const data = ele.data();
                arr.push(<DisplayNotification text={data.text} time={data.time} id={ele.id} />)
            })
            // data.docs.map((ele,i) => {
            //     const data = ele.data()
            //     return <DisplayFarmer name={data.name} email={data.email} key={i} adhaar={data.adhaar}/>
            // })
            }{arr}
            </>:<></>}
            {/* {show?<div className="text-ms my-10 cursor-pointer flex justify-center items-center" onClick={()=>{setLimit((limit)=>limit+5)}}>Load More<RiArrowDownSLine className="mx-0.5" /></div>:<></>} */}
        </>
    )
};