import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/styles.css"
import { ApiContext } from '../features/APIToken/ApiContext.js';
import BannerAlert from '../component/BannerAlert.js';

export default function Register() {
  const { user, loginError, passError, mailError, registerUser} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [firstname, setFirstname] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirm] = useState();
  const [userRegisterd, setUserRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser({
        name,
        firstname,
        mail,
        password,
        password_confirmation
    }).then(data => {
      if(data.message === "user registered"){
        setUserRegistered("utilisateur bien enregistré")
        window.location.reload();
      }
    })
}
    return (
        <div className='container'>
            <div className="container-connexion">
                <form onSubmit={handleSubmit} className="form-register">
                  {/* <label>Identifiant</label> */}
                  <input name='name' className="input-connexion" placeholder="Nom" onChange={e => setName(e.target.value)}/>
                  <p className="errorMessage">{mailError}</p>
                  {/* <label>Mot de passe</label> */}
                  <input name='firstname' className="input-connexion" placeholder="Prénom" onChange={e => setFirstname(e.target.value)} />
                  <p className="errorMessage">{passError}</p>
                  <input name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
                  <input type='password' name='password' className="input-connexion" placeholder="mot de passe" onChange={e => setPassword(e.target.value)}/>
                  <input type='password' name='password_confirmation' className="input-connexion" placeholder="confirmation du mot de pass" onChange={e => setPasswordConfirm(e.target.value)}/>
                  <input type="submit" className="btn-connexion" value="Inscription"/>
                  <p className="errorMessage">{loginError}</p>
                </form>
            </div>
        </div>
        )
}