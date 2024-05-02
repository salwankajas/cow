// import { getDatabase, ref, onValue,limitToLast,query } from "firebase/database";
import { getDoc, doc,collection, getDocs } from "firebase/firestore";
import {db} from '@/firebase/config';
// function readUserData(refreshingData:(data:any)=>void,type:string,soceity:string,limit:number){
//   if(soceity == "sb" || soceity=="cs"){
//       const db = getDatabase();
//       let a=query(ref(db, `${soceity}/events/`),limitToLast(limit));
//       // let starCountRef = ref(db,`${soceity}/events/`);
//       if(type=="events"){
//       }else if(type=="archives"){
//         a = query(ref(db, `${soceity}/archives/`),limitToLast(limit));
//       }else if(type=="gallery"){
//         a = query(ref(db, `${soceity}/gallery/`),limitToLast(limit));
//       }
//       onValue(a, (snapshot) => {
//         const data = snapshot.val();
//         refreshingData(data)
//       })
//   }
// }


function readAnimal(refreshingData:(data:any)=>void,user:string){
  const docRef = doc(db, "farmer",user);
// const docSnap = await getDoc(docRef);
getDoc(docRef).then((value)=>{
  if (value.exists()) {
    console.log("Document data:", value.data());
    const data = value.data()["animal"]
    refreshingData(data)
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
})
}
function readFarmer(refreshingData:(data:any)=>void){
try {
  getDocs(collection(db, "farmer")).then((value)=>{
    refreshingData(value)
  })
  
} catch (error) {
  console.error("Error getting documents:", error);
  // Handle error as needed
}
}
function readNotification(refreshingData:(data:any)=>void){
try {
  getDocs(collection(db, "notification")).then((value)=>{
    console.log(value)
    refreshingData(value)
  })
  
} catch (error) {
  console.error("Error getting documents:", error);
  // Handle error as needed
}
}

export {readAnimal,readFarmer,readNotification}