'use client'
import { createContext,useContext,useState,useEffect} from "react";
import {onAuthStateChanged,getAuth,} from 'firebase/auth'
import firebase_app from '@/firebase/config';
import { useRouter,usePathname } from "next/navigation"
import ReactLoading from 'react-loading';

const auth = getAuth(firebase_app)

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children,})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()
    const pathname = usePathname()
    const [path, setPath] = useState(pathname);
    const changepaths = (value)=>{
        setPath(value)
    }
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                if(pathname == "/login"){
                    setLoading(false);
                }else{
                    window.location.href = "/login";
                }
            }
        });
        return () => unsubscribe();

    },[])

    return (
        <AuthContext.Provider value={{ user,changepaths,path }}>
            {loading ? <div className="flex justify-center items-center h-full"><ReactLoading type={"spinningBubbles"} color={"#666"} height={60} width={60}/></div> : children}
        </AuthContext.Provider>
    );
}