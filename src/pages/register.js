import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/styles.css"
import { ApiContext } from '../features/APIToken/ApiContext.js';

export default function Register() {
  const {login, user, loginError, passError, mailError, registerUser} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [firstname, setFirstname] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token') && user.message === "succes" ){
      navigate('/')
    }
  })

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser({
        name,
        firstname,
        mail,
        password,
        passwordConfirm
    }).then(data => {
      if(data.message === "connected"){
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
                  <input type='password' name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
                  <input type='password' name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
                  <input type="submit" className="btn-connexion" value="Connexion"/>
                  <p className="errorMessage">{loginError}</p>
                </form>
                  
            </div>
        </div>
        )
}