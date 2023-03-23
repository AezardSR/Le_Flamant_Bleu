import React, { createContext, useEffect, useState } from "react";
import useToken from "./useToken";

const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();

    useEffect(() => {
        console.log("New token value:", token);
      }, [token]);

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
                console.log(data)
                localStorage.setItem("token", JSON.stringify(data.access_token));
                setToken(data.access_token)
                console.log(token)
            }
            return data;     
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }
    useEffect(()=>{
        fetchUser()
        console.log('useEffect apicontext')
    },[token])
    
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
                setUser(data)
            })
    }

    return (
        <ApiContext.Provider value={{login,fetchUser, user}}>
            {children}
        </ApiContext.Provider>
    )
}