import React, { createContext, useEffect, useState } from "react";
import useToken from "./useToken";

const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();
    
    useEffect(() => {
        if(token !== undefined){
            console.log('2')
            fetchUser()
        }
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
            localStorage.setItem("token", JSON.stringify(data));
            setToken(data.access_token)
        })
        .catch((error) => { console.log('error: ' + error) })
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
        <ApiContext.Provider value={{login, user}}>
            {children}
        </ApiContext.Provider>
    )
}