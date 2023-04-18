import React, { createContext, useEffect, useState } from "react";
import useToken from "./useToken";
import { Navigate } from "react-router-dom";

const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();
    const [passError, setPassError] = useState(false) // mise en place du state passError pour l'utilisation sur la page de connexion
    const [mailError, setMailError] = useState(false) // mise en place du state mailError pour l'utilisation sur la page de connexion
    const [loginError, setLoginError] = useState(false) // mise en place du state loginError pour l'utilisation sur la page de connexion
    const [rolesList, setRolesList] = useState(false); // mise en place du state rolesList pour l'utilisation sur la page d'inscription
    const [typesList, setTypesList] = useState(false); // mise en place du state typesList pour l'utilisation sur la page d'inscription
    const [nameError, setNameError] = useState(false); // mise en place du state nameError pour l'utilisation sur la page d'inscription
    const [firstnameError, setFirstnameError] = useState(false); // mise en place du state firstnameError pour l'utilisation sur la page d'inscription

    const refreshToken = () => {
        fetch(`${process.env.REACT_APP_API_PATH}/refresh`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
        }}).then(res => res.json()).then(data => {
            if(data.message === "connected"){
                setToken(data.access_token);                
            }
    })}

    const requestAPI = (url, method, body) => {
        if(body === null){
            return fetch(`${process.env.REACT_APP_API_PATH}${url}`, {
                method: method,
                headers: {
                    'content-type': 'application/json',
                    'Authorization' : 'bearer ' + token
                },
            })
        }else {
            return fetch(`${process.env.REACT_APP_API_PATH}${url}`, {
                method: method,
                headers: {
                    'content-type': 'application/json',
                    'Authorization' : 'bearer ' + token
                },
                body: JSON.stringify(body)
            })
}}
    
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

    
    const fetchUser = () => {
        requestAPI('/user-profile', 'GET', null).then((res) => (
                res.json()
            )).then((data) => {
                setUser(data)
            })
    }
    useEffect(()=>{
        fetchUser()
    },[token])

    const registerUser = (credentials) => {
        requestAPI('/register', 'POST', credentials).then(response => response.json())
        .then((data) => {
            console.log(data)
            console.log(data)
            if(data.message === "user registered"){
                setTypesList(data)
            } else {
                setNameError(data.name)
                setFirstnameError(data.firstname)
                setMailError(data.mail)
                setPassError(data.password)
                setLoginError(data.message)
            }
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }

    const logout = () =>{
        requestAPI('/logout', 'GET', null).then((res) => (res.json()))
        .then((data)=> {
                setUser(data)
            })
        }

        const getRoles = () => {
            requestAPI('/roles', 'GET', null).then((res) => (
                  res.json()
              )).then((data) => {
                  setRolesList(data)
              }).catch((error) => { console.log('error: ' + error.message) })
          }

        const getTypes = () => {
            requestAPI('/types', 'GET', null).then((res) => (
                  res.json()
              )).then((data) => {
                    setTypesList(data)
              }).catch((error) => { console.log('error: ' + error.message) })
          }

    return (
        <ApiContext.Provider value={{login,fetchUser, user, logout, passError, mailError, loginError, firstnameError, nameError, registerUser, getRoles, rolesList,typesList, getTypes, requestAPI, refreshToken  }}>
            {children}
        </ApiContext.Provider>
    )
}