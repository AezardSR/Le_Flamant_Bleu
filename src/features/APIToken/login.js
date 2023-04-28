import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import LogoManu from '../../assets/img/logo_la_manu.png'
import "../../css/styles.css"
import { ApiContext } from './ApiContext';

export default function Login({ setToken }) {
  // Récupère les propriétés de l'objet ApiContext avec useContext
  const {login, user, loginError, passError, mailError, userStatus} = useContext(ApiContext);
  
  // Définit deux états, mail et password, avec useState
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  
  // Initialise la navigation avec useNavigate
  const navigate = useNavigate();

  // Effectue des actions à chaque changement de la propriété user
  useEffect(()=>{
    // Si l'utilisateur est connecté et qu'il possède un token, renvoie vers la page d'accueil
    if(localStorage.getItem('token') && (user.message === "success" || userStatus === "connected" )){
      console.log("redirection vers /")
      navigate('/');
    }
  },[user])

  // Soumission du formulaire
  const handleSubmit = async e => {
    e.preventDefault();
    // Appelle la fonction login avec les informations mail et password
    login({
        mail,
        password
    }).then(data => {
      // Si l'utilisateur est connecté, recharge la page
      if(data.message === "connected"){
        window.location.reload();
      }
    })
}

// Affiche le formulaire de connexion
return (
  <div className='container'>
      <div className="container-connexion">
        <img src={LogoManu} alt="logo la manu"/>
          <form onSubmit={handleSubmit} className="form-connexion">
            {/* <label>Identifiant</label> */}
            {/* Affiche un champ de saisie pour le mail */}
            <input name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
            {/* Affiche un message d'erreur en cas d'erreur de saisie du mail */}
            <p className="errorMessage">{mailError}</p>
            {/* <label>Mot de passe</label> */}
            {/* Affiche un champ de saisie pour le mot de passe */}
            <input type='password' name='password' className="input-connexion" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
            {/* Affiche un message d'erreur en cas d'erreur de saisie du mot de passe */}
            <p className="errorMessage">{passError}</p>
            {/* Affiche un bouton de connexion */}
            <input type="submit" className="btn-connexion" value="Connexion"/>
            {/* Affiche un message d'erreur en cas d'erreur de connexion */}
            <p className="errorMessage">{loginError}</p>
          </form>    
      </div>
  </div>
  )
}
