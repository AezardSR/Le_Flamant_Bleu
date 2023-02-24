import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoManu from '../assets/img/logo_la_manu.png'
import "../css/connexion.css"

export default class Connexion extends Component {
  render() {
    return (
    <div className='container'>
        <div className="container-connexion">
          <img src={LogoManu} alt="logo la manu"/>
            <form method='POST' action="http://localhost:8000/api/login" className="form-connexion">
              {/* <label>Identifiant</label> */}
              <input name='mail' className="input-connexion" placeholder="Nom d'utilisateur ou mail" />
              {/* <label>Mot de passe</label> */}
              <input type='password' name='password' placeholder="Mot de passe" />
              <a className="password-forget" href="#f">Mot de passe oublié ?</a>
              <button type="submit" className="btn-connexion">Connexion</button>
            </form>
        </div>
    </div>
    )
  }
}
