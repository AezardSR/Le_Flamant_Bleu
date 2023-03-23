import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import LogoManu from '../../assets/img/logo_la_manu.png'
import "../../css/connexion.css"
import { ApiContext } from './ApiContext';

export default function Login({ setToken }) {
  const {login, user, fetchUser} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState();

  useEffect(()=>{
    if(localStorage.getItem("token") && user.message === "success" ){
      navigate('/')
    }
  },[])

  const handleSubmit = async e => {
    e.preventDefault();
    login({
        mail,
        password
    }).then(data => {
      setLoginState(data)
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
    
                  <input type="submit" className="btn-connexion" value="Connexion"/>
                </form>
                  
            </div>
        </div>
        )
}