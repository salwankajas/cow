import { getDatabase, ref, onValue,limitToLast,query } from "firebase/database";
function readUserData(refreshingData:(data:any)=>void,type:string,soceity:string,limit:number){
  if(soceity == "sb" || soceity=="cs"){
      const db = getDatabase();
      let a=query(ref(db, `${soceity}/events/`),limitToLast(limit));
      // let starCountRef = ref(db,`${soceity}/events/`);
      if(type=="events"){
      }else if(type=="archives"){
        a = query(ref(db, `${soceity}/archives/`),limitToLast(limit));
      }else if(type=="gallery"){
        a = query(ref(db, `${soceity}/gallery/`),limitToLast(limit));
      }
      onValue(a, (snapshot) => {
        const data = snapshot.val();
        refreshingData(data)
      })
  }
}

export {readUserData}