import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import Connexion from '../pages/Connexion';
import LogoManu from '../../../assets/img/logo_la_manu.png'
import "../../../css/connexion.css"

async function loginUser(credentials) {
    return fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          mail,
          password
        });
        setToken(token);
    }

    return (
        <div className='container'>
            <div className="container-connexion">
              <img src={LogoManu} alt="logo la manu"/>
                <form onSubmit={handleSubmit} className="form-connexion">
                  {/* <label>Identifiant</label> */}
                  <input name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
    
                  {/* <label>Mot de passe</label> */}
                  <input type='password' name='password' placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
                  <a className="password-forget" href="#f">Mot de passe oublié ?</a>
    
                  <button type="submit" className="btn-connexion">Connexion</button>
                </form>
                  
            </div>
        </div>
        )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};