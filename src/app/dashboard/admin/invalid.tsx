import {MdNotInterested} from 'react-icons/md'
export default function Invalid(props:{strings:string}){
    return(
        <>
            <div className="h-11 mx-auto rounded-lg flex justify-center items-center py-7">
                <div className='h-auto text-red-600 flex items-center'>
                    <MdNotInterested className='inline-block scale-105 mx-1'/>
                    <h1 className='inline-block'>{props.strings}</h1>
                </div>
            </div>
        </>
    )
}