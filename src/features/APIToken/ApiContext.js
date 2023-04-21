import React, { createContext, useEffect, useState } from "react";
import useToken from "./useToken";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";



// Création d'un contexte nommé ApiContext
const ApiContext = createContext();

// Exportation du contexte pour pouvoir l'utiliser dans d'autres composants
export { ApiContext };


// Création d'un composant ApiProvider qui va fournir les fonctions et les données nécessaires aux autres composants
export const ApiProvider  = ({children}) => {
    // Utilisation de useToken, un hook personnalisé qui retourne le token stocké dans localStorage ou qui en crée un nouveau s'il n'existe pas
    const {token, setToken} = useToken();
    const navigate = useNavigate();
    const dayjs = require('dayjs');

    // Déclaration de différents états pour stocker des informations nécessaires à l'application
    const [user, setUser] = useState({}); // Stocke les informations de l'utilisateur courant
    const [passError, setPassError] = useState(false); // Stocke l'état de l'erreur de mot de passe pour la page de connexion
    const [mailError, setMailError] = useState(false); // Stocke l'état de l'erreur d'adresse email pour la page de connexion
    const [loginError, setLoginError] = useState(false); // Stocke l'état de l'erreur de connexion pour la page de connexion
    const [rolesList, setRolesList] = useState(false); // Stocke la liste des rôles pour la page d'inscription
    const [typesList, setTypesList] = useState(false); // Stocke la liste des types d'utilisateurs pour la page d'inscription
    const [nameError, setNameError] = useState(false); // Stocke l'état de l'erreur de nom pour la page d'inscription
    const [firstnameError, setFirstnameError] = useState(false); // Stocke l'état de l'erreur de prénom pour la page d'inscription
    const [userStatus, setUserStatus] = useState(false); // Stocke l'état de l'inscription de l'utilisateur pour la page d'inscription


    // Fonction pour rafraîchir le token
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

    // Fonction qui check si le token est valide
    const checkToken = new Promise((resolve, reject) => {
        const authTokens = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
        const accessToken = jwt_decode(authTokens? authTokens : null);
        const isExpired = dayjs.unix(accessToken.exp).diff(dayjs()) < 1;
        isExpired ? reject("token expiré") : resolve(isExpired);
    })
    // Fonction permettant les requêtes à l'API, avec une facilité d'utilisation au niveau des paramètres headers et body
    const requestAPI = (url, method, body) => {
        return new Promise((resolve, reject) => {
         checkToken.then(() => {
            console.log("token valide")
            if(body === null){
                resolve( fetch(`${process.env.REACT_APP_API_PATH}${url}`, {
                    method: method,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization' : 'bearer ' + token
                    },
                }))
            } else {
                resolve( fetch(`${process.env.REACT_APP_API_PATH}${url}`, {
                    method: method,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization' : 'bearer ' + token
                    },
                    body: JSON.stringify(body)
                }))
            }
        }).catch((error) => {
            navigate('/login')
            reject(error)
        })
    })}

    // Fonction permettant de se connecter à l'application, elle permet re récuperer un token et de le stocker dans localStorage
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
                localStorage.setItem("token", JSON.stringify(data.access_token));//stocke le token dans le localStorage
                setToken(data.access_token)//permet de stocker le token dans le state et de permettre son utilisations dans UseToken
                setUserStatus("connected")
            } else {
                setMailError(data.mail)//met à jour l'état de l'erreur d'adresse email
                setPassError(data.password)//met à jour l'état de l'erreur de mot de passe
                setLoginError(data.message)//met à jour l'état de l'erreur de connexion
            }
            return data;     
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }
   
    const fetchUser = () => {
        requestAPI('/user-profile', 'GET', null).then((res) => (
                res.json()
            )).then((data) => {
                setUser(data)//met à jour l'état de l'utilisateur, permettant d'utiliser les informations de l'utilisateur dans d'autres composants
            }).catch((error) => { /*console.log('error: ' + error.message)*/ })
    }
    //Le useEffect, s'exécute à chaque fois que le token change, permettant de rafraîchir l'utilisateur après une connexion
    useEffect(()=>{
        fetchUser()
    },[token])

    //Fonction permettant l'inscription d'un utilisateur
    const registerUser = (credentials) => {
    return requestAPI('/register', 'POST', credentials).then(response => response.json())
        .then((data) => {
            if(data.message === "user registered"){
                setTypesList(data)
            } else {
                setNameError(data.name)//met à jour l'état de l'erreur de nom dans le formulaire d'inscription
                setFirstnameError(data.firstname)//met à jour l'état de l'erreur de prénom dans le formulaire d'inscription
                setMailError(data.mail)// met à jour l'état de l'erreur d'adresse email dans le formulaire d'inscription
                setPassError(data.password)// met à jour l'état de l'erreur de mot de passe dans le formulaire d'inscription
                setLoginError(data.message)//met à jour l'état de l'erreur de connexion dans le formulaire d'inscription
            }
        }).catch((error) => { console.log('error: ' + error.message) })
    }

    //Fonction permettant de se déconnecter de l'application, elle permet de supprimer le token du localStorage et de déconnecter l'utilisateur du token
    const logout = () =>{
        requestAPI('/logout', 'GET', null).then((res) => (res.json()))
        .then((data)=> {
                setUser(data)//met à jour l'état de l'utilisateur, permettant de supprimer les informations précédement stockées
                setUserStatus(false)
            })
        }
        //Fonction permettant de récupérer la liste des rôles pour son utilisation dans le formulaire d'inscription
        const getRoles = () => {
            requestAPI('/roles', 'GET', null).then((res) => (
                  res.json()
              )).then((data) => {
                  setRolesList(data)//met à jour l'état de la liste des rôles avec les données récupérées
              }).catch((error) => {/* console.log('error: ' + error.message)*/ })
          }
        //Fonction permettant de récupérer la liste des types pour son utilisation dans le formulaire d'inscription
        const getTypes = () => {
            requestAPI('/types', 'GET', null).then((res) => (
                  res.json()
              )).then((data) => {
                    setTypesList(data)//met à jour l'état de la liste des types avec les données récupérées
              }).catch((error) => { /*console.log('error: ' + error.message)*/ })
          }

    //On retourne l'APIContext, pour mettre au tour de l'application et permettre l'utilisation des fonctions
    return (
        <ApiContext.Provider value={{login,fetchUser, user, logout, passError, mailError, loginError, firstnameError, nameError, registerUser, getRoles, rolesList,typesList, getTypes, requestAPI, refreshToken, checkToken , userStatus }}>
            {children}
        </ApiContext.Provider>
    )
}