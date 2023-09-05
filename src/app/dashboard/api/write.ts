import { getDatabase, ref, set } from "firebase/database";
interface EventForm{
  heading?:string;
  day?:number;
  month?:string;
  time?:string;
  poster?:string;
  content?:string;
  vanue?:string;
  link?:string;
  type?:string;
  year?:number;
  soceity:string;
  id:string;
}

function getTime() {
  const d = new Date()
  return d.getTime();
}
function getTimestamp(year:number,month:number,day:number){
  let date = Date.parse(`${month}/${day}/${year} ${Math.floor(Math.random() * (13))}:${Math.floor(Math.random() * (61))}:${Math.floor(Math.random() * (61))}`)
  return date/1000
}
const months: { [key: string]: number }  = {"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sept":9,"Oct":10,"Nov":11,"Dec":12}
function writeUserData({heading,day,month,time,poster,content,link,vanue,type,year,soceity,id}:EventForm) {
  if(soceity == "sb" || soceity=="cs"){
    const db = getDatabase();
    if(type=="events"){
      set(ref(db, `${soceity}/events/` + getTime()), {
        poster:poster,
        heading:heading,
        day:day,
        month:month,
        time:time,
        content:content,
        vanue:vanue,
        link:link,
        id:id
      });
    }else if(type=="archives"){
      // getTimestamp(year!,months[month!],day!)
      set(ref(db, `${soceity}/archives/` + getTimestamp(year!,months[month!],day!)),{
        heading:heading,
        day:day,
        month:month,
        year:year,
        content:content,
      });
    }else if(type="gallery"){
      set(ref(db, `${soceity}/gallery/` + getTime()), {
        image:poster
      });
    }
  }
}

export {writeUserData}