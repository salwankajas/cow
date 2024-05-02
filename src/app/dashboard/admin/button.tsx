'use client'
import AddForm from "./event"
import AddEvent from '@/components/addEvent/AddEvent'
import { useState } from "react"

export default function Button(props:{soceity:string}){
    const [events, setEvents] = useState<boolean>(false)
    function addEvent() {
        setEvents(e=>{
            if(e){
                return false
            }else{
                return true
            }
            })
        window.scrollTo(0, 0);
        return events
    }
    return(
        <>
            <AddEvent style="fixed top-2 right-2 md:top-6 md:right-6" onClick={addEvent} />
            {events ? <AddForm remove={addEvent} soceity={props.soceity} /> : <></>}
        </>
    )
}