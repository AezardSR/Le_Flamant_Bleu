import React, { Component } from 'react'
import LogoManu from '../assets/img/logo_la_manu.png'
import "../css/connexion.css"

export default class Connexion extends Component {
  render() {
    return (
    <div className='container'>
        <div>
          <img src={LogoManu} alt="logo la manu"/>
            <form className="form-connexion">
              {/* <label>Identifiant</label> */}
              <input className="input-connexion" placeholder="Nom d'utilisateur ou mail" />

              {/* <label>Mot de passe</label> */}
              <input placeholder="Mot de passe" />
              <a className="password-forget" href="#">Mot de passe oublié ?</a>

              <button className="btn-connexion">Connexion</button>
            </form>
        </div>
    </div>
    )
  }
}
