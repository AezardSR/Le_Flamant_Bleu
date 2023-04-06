import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import LogoManu from '../../assets/img/logo_la_manu.png'
import "../../css/styles.css"
import { ApiContext } from './ApiContext';

export default function Login({ setToken }) {
  const {login, user, loginError, passError, mailError} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token') && user.message === "succes" ){
      navigate('/')
    }
  })

  const handleSubmit = async e => {
    e.preventDefault();
    login({
        mail,
        password
    }).then(data => {
      if(data.message === "connected"){
        window.location.reload();
      }
    })
}
    return (
        <div className='container'>
            <div className="container-connexion">
              <img src={LogoManu} alt="logo la manu"/>
                <form onSubmit={handleSubmit} className="form-connexion">
                  {/* <label>Identifiant</label> */}
                  <input name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
                  <p className="errorMessage">{mailError}</p>
                  {/* <label>Mot de passe</label> */}
                  <input type='password' name='password' className="input-connexion" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
                  <p className="errorMessage">{passError}</p>
                  <input type="submit" className="btn-connexion" value="Connexion"/>
                  <p className="errorMessage">{loginError}</p>
                </form>
                  
            </div>
        </div>
        )
}