import React, {useContext, useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
//import Connexion from '../pages/Connexion';
import LogoManu from '../../assets/img/logo_la_manu.png'
import "../../css/connexion.css"
import { ApiContext } from './ApiContext';


export default function Login({ setToken }) {
  const {login, user, fetchUser} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  if(user.message == "succes"){
    navigate("/")
  }

  const handleSubmit = async e => {
    e.preventDefault();
    login({
        mail,
        password
    })
}

    return (
        <div className='container'>
            <div className="container-connexion">
              <img src={LogoManu} alt="logo la manu"/>
                <form onSubmit={handleSubmit} className="form-connexion">
                  {/* <label>Identifiant</label> */}
                  <input name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
    
                  {/* <label>Mot de passe</label> */}
                  <input type='password' name='password' className="input-connexion" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
    
                  <button type="submit" className="btn-connexion">Connexion</button>
                </form>
                  
            </div>
        </div>
        )
}