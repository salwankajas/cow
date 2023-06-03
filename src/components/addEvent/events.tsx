'use server'
import DisplayEvents from "../displayEvent/displayEvents";
import { Suspense,useLayoutEffect,useMemo,useState } from "react";
import { getEvents } from "@/app/dashboard/api/fetch";
import Loading from "@/app/dashboard/loading";
import { GetStaticPropsContext } from 'next'
 interface Events {
    owner: string;
    poster: string;
    heading: string;
    time:string;
    day: number;
    month: string;
    rules: string;
    content: string;
    link: string;
}
export default async function Events(){
    const data:Events[] = await getEvents()
    return(<>{data.map((ele,i)=><DisplayEvents name={ele.heading} key={i} poster={ele.poster} day={ele.day} month={ele.month} />)}</>
    )
};