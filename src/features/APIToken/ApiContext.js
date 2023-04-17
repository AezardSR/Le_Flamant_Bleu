import React, { createContext, useEffect, useState } from "react";
import useToken from "./useToken";

const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();
    const [passError, setPassError] = useState(false) // mise en place du state passError pour l'utilisation sur la page de connexion
    const [mailError, setMailError] = useState(false) // mise en place du state mailError pour l'utilisation sur la page de connexion
    const [loginError, setLoginError] = useState(false) // mise en place du state loginError pour l'utilisation sur la page de connexion

    const login = (credentials) => {
        return fetch(`${process.env.REACT_APP_API_PATH}/login`, {
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
            } else {
                setMailError(data.mail)
                setPassError(data.password)
                setLoginError(data.message)
            }
            return data;     
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }
    useEffect(()=>{
        fetchUser()
    },[token])
    
    const fetchUser = () => {
            fetch(`${process.env.REACT_APP_API_PATH}/user-profile`, {
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

    const registerUser = (credentials) => {
        return fetch(`${process.env.REACT_APP_API_PATH}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)  
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }

    const logout = () =>{
        fetch('http://localhost:8000/api/logout', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
            }}).then((res) => (res.json())).then((data)=> {
                setUser(data)
            })
        }

    return (
        <ApiContext.Provider value={{login,fetchUser, user, logout, passError, mailError, loginError, registerUser}}>
            {children}
        </ApiContext.Provider>
    )
}