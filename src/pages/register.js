import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/styles.css"
import { ApiContext } from '../features/APIToken/ApiContext.js';

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
        <div>
          <h1 className="title">Inscription d'utilisateur</h1>
            <div className="container-r">
                <form onSubmit={handleSubmit} id="form-register">
                  <div>
                    <div>
                      <input name='name' className="input-r" placeholder="Nom" onChange={e => setName(e.target.value)}/>
                      <p className="errorMessage">{mailError}</p> 
                    </div>
                    <div>
                      <input name='firstname' className="input-r" placeholder="Prénom" onChange={e => setFirstname(e.target.value)} />
                      <p className="errorMessage">{passError}</p>
                    </div>
                  </div>
                  <input name='mail' className="input-r" placeholder="mail" onChange={e => setMail(e.target.value)}/>
                  <input type='password' name='password' className="input-r" placeholder="mot de passe" onChange={e => setPassword(e.target.value)}/>
                  <input type='password' name='password_confirmation' className="input-r" placeholder="confirmation du mot de pass" onChange={e => setPasswordConfirm(e.target.value)}/>
                  <input type="submit" className="btn-r" value="Valider"/>
                  <p className="errorMessage">{loginError}</p>
                </form>
            </div>
        </div>
        )
}