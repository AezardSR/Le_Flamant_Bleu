import React, { createContext, useEffect, useState } from "react";
import useToken from "./useToken";

const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();

    useEffect(()=>{
        fetchUser()
    },[])

    const login = (credentials) => {
        return fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then((data) => {
            if(data.message === "connected"){
                localStorage.setItem("token", JSON.stringify(data.access_token));
                setToken(data.access_token)
                fetchUser()
                return data.message;
            } else {
                console.log(data)
            }
                
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }
    
    const fetchUser = () => {
            
            fetch('http://localhost:8000/api/user-profile', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
            }
            }).then((res) => (
                res.json()
            )).then((data) => {
                console.log(data.firstname)
                setUser(data)
            })
    }

    return (
        <ApiContext.Provider value={{login,fetchUser, user}}>
            {children}
        </ApiContext.Provider>
    )
}