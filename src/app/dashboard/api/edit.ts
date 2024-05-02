// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import removes from "./remove";
import { doc, setDoc } from "firebase/firestore";
import {db} from "@/firebase/config";
// interface EventForm{
//   id:string;
//   heading:string;
//   day:number;
//   month:string;
//   time?:string;
//   poster?:string;
//   content:string;
//   vanue?:string;
//   link?:string;
//   type:string;
//   year?:number;
//   soceity:string;
// }

// interface EventForm{
//   id:string;
//   heading?:string;
//   day?:number;
//   month?:string;
//   time?:string;
//   poster?:string;
//   content?:string;
//   vanue?:string;
//   link?:string;
//   type?:string;
//   year?:number;
//   soceity:string;
//   ids?:string;
// }
// function getTimestamp(year:number,month:number,day:number){
//   let date = Date.parse(`${month}/${day}/${year} ${Math.floor(Math.random() * (13))}:${Math.floor(Math.random() * (61))}:${Math.floor(Math.random() * (61))}`)
//   return date/1000
// }
// const months: { [key: string]: number } = {"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sept":9,"Oct":10,"Nov":11,"Dec":12}

// function editUserData({id,heading,day,month,time,poster,content,link,vanue,type,year,soceity,ids}:EventForm) {
//   if(soceity == "sb" || soceity=="cs"){
//       const db = getFirestore();
//       if(type=="events"){
//         setDoc(doc(db, `${soceity}/events/` + id), {
//           poster:poster,
//           heading:heading,
//           day:day,
//           month:month,
//           time:time,
//           content:content,
//           vanue:vanue,
//           link:link,
//           id:ids
//         },{ merge: true,}
//         );
//       }else if(type=="archives"){
//         removes(id,type,soceity)
//         set(ref(db, `${soceity}/archives/` + getTimestamp(year!,months[month!],day!)), {
//           heading:heading,
//           day:day,
//           month:month,
//           year:year,
//           content:content,
//         });
//       }
//   }
// }

function addDescription({id,text,doctor,time,animal}:{id:string,text:string,doctor:string,time:string,animal:string}) {
  const ref = doc(db, 'farmer', id);
  const data={animal:{[animal]:{medical:{descr:text,doctor:doctor,time:time},checked:true}}}
  setDoc(ref, data, { merge: true });
}

export {addDescription}