import Image from "next/image"
import { useState } from "react"
export default function LazyImage(props:{src:string,className:string,alt:string,width:string,height:string,sizes:string}){
    const [imageLoaded,setImageLoaded] = useState(false)
    return (
        <>
            {/* <img src={props.poster} alt="poster" width="0" height="0" sizes="100vw" className={props.className}/> */}
            {!imageLoaded?<img src={`${props.src.slice(0,-4)}l.${props.src.slice(-3,)}`} alt={props.alt} width={props.width} height={props.height} sizes={props.sizes} className={`${props.className} blur`}/>:<></>}
            <Image src={props.src} alt="poster" width="0" height="0" sizes="100vw" className="trash-hover-in w-full h-auto" onLoadingComplete={()=>{setImageLoaded(true)}} />
        </>
    )
}