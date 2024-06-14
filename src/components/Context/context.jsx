import { createContext, useState, useEffect } from "react";

export const SistemPagoCardContext = createContext()

export const SistemaPagoProvider = ( { children } ) => {
    
    const [token, setToken] = useState(() =>{
        return localStorage.getItem('token') || "";
    })

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token)
        }else{
            localStorage.removeItem('token')
        }
    }, [token])
    return(
        <SistemPagoCardContext.Provider value={{
            token,
            setToken
        }}>
            { children }
        </SistemPagoCardContext.Provider>
    )
}