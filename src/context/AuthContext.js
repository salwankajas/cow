'use client'
import { createContext,useContext,useState,useEffect,useRef} from "react";
import {onAuthStateChanged,getAuth,} from 'firebase/auth'
import firebase_app from '@/firebase/config';
import { usePathname } from "next/navigation"
import ReactLoading from 'react-loading';


const auth = getAuth(firebase_app)

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children,})=>{
    // const [user, setUser] = useState(null);
    
    // const [name, setName] = useState('');
    const name = useRef(0);
    const user = useRef(0);
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(true);
    const pathname = usePathname()
    const [path, setPath] = useState(pathname);
    const changepaths = (value)=>{
        setPath(value)
    }
    // const changerole = (value)=>{
    //     setRole(value)
    // }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (users) => {
            if (users) {
                user.current = users;
                setLoading(false);
            } else {
                user.current =null
                if(pathname == "/login" || pathname == "/register" || pathname == "/"){
                    setLoading(false);
                }else{
                    setLoading(false);
                    window.location.href = "/login";
                    // window.location.href = "/login";
                }
            }
        });
        return () => unsubscribe();

    },[])

    return (
        <AuthContext.Provider value={{ user,changepaths,path,name,role,setRole}}>
            {loading ? <div className="flex justify-center items-center h-full"><ReactLoading type={"spinningBubbles"} color={"#666"} height={60} width={60}/></div> : children}
        </AuthContext.Provider>
    );
}