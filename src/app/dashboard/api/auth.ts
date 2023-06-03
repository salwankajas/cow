import React, { useCallback, useMemo, createContext, useContext } from "react"; 
import auth0 from 'auth0-js';
 
type Props = { children: React.ReactNode } 
const DATABASE_CONNECTION = 'Username-Password-Authentication'; 

const AuthContext = createContext<{
    loginWithUsernamePassword: (username: string, password: string) => Promise<any>, 
    // loginWithGoogle: () => void, 
    // signUp: (username: string, password: string, name:string) => Promise<any>, 
}>(undefined as any); 
interface auth{
    domain:string
    clientID:string,
    redirectUri:string,
    responseType:string
}
const obj : auth = { 
    domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID as string, 
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI as string,
    responseType: 'code',
}

export function AuthProvider({children}: Props) { 
    const webAuth = useMemo(() => new auth0.WebAuth(obj),[]); 

    const loginWithUsernamePassword = useCallback((username: string, password: string) => { 
        const urlParams = new URLSearchParams(window.location.search);
        const stateParam = urlParams.get('state') || ''; 
        return new Promise((resolve, reject) => { 
            webAuth.login({ 
                username, 
                password,
                realm: DATABASE_CONNECTION, 
                state: stateParam, 
            }, (error, result) => { 
                if (error) { 
                    reject(error); 
                    return; 
                } 
                resolve(result); 
            }) }) }, [webAuth]); 
    const loginWithGoogle = useCallback(() => { 
        webAuth.authorize({ connection: 'google-oauth2' }); 
    }, [webAuth]); 
    const signUp = useCallback((username: string, password: string, name:string) => { 
        return new Promise((resolve, reject) => { 
            webAuth.signup({ 
                connection: DATABASE_CONNECTION, 
                password: password, 
                email: username,
            }, 
           (error, result) => { 
               if (error) { 
                   reject(error); 
                   return; 
               } 
               resolve(result); }) }) 
           }, [webAuth]); 
    const value = useMemo(() => ({ 
        loginWithUsernamePassword, 
        loginWithGoogle, 
        signUp }), 
    [loginWithGoogle, loginWithUsernamePassword, signUp]); 

    return ( {children} ); } 

export const useAuth = () => useContext(AuthContext);