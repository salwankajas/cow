import firebase_app from "../../firebase/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const auth = getAuth(firebase_app);

export async function signIn(email:string, password:string) {
    let result:any = null,error:any = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
    return { result, error };
}