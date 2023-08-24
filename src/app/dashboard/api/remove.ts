import { getDatabase, ref, remove } from "firebase/database";

// initialise database
const db = getDatabase();

export default function removes(id:string,type:string,soceity:string){
  if(soceity == "sb" || soceity=="cs"){
    let tasksRef = ref(db, `${soceity}/events/`+id);
    if(type=="events"){
      
    }else if(type=='archives'){
      tasksRef = ref(db, `${soceity}/archives/`+id);
    }else if(type=='gallery'){
      tasksRef = ref(db, `${soceity}/gallery/`+id);
    }
    remove(tasksRef).then(() => {
    });
  }
}