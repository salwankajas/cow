import firebase_app from "../../firebase/config";
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
export const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app)

export async function signIn(email: string, password: string) {
    let result:any = null, error:any = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
    return { result, error };
}
export async function signUp(name:string,email: string, adhaar:string,password: string, role: string) {
    let result:any = null, error:any = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        const docRef = doc(db, role,result.user.uid);
        await setDoc(docRef, {name:name,adhaar:adhaar,email:email,uid:result.user.uid},{merge:true});
        console.log("Document successfully written!");
        //   }
    } catch (e) {
        error = e;
        console.log(e)
    }
    return { result, error };
}