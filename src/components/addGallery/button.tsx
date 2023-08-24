'use client'
import AddForm from "@/components/form/addGallery"
import AddGallery from '@/components/addGallery/AddGallery'
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
            <AddGallery style="fixed top-2 right-2 md:top-6 md:right-6" onClick={addEvent} />
            {events ? <AddForm remove={addEvent} soceity={props.soceity} />  : <></>}
        </>
    )
}