import React, { Component } from 'react'
import LogoManu from './assets/img/logo_la_manu.png'
import "./css/connexion.css"

export default class Connexion extends Component {
  render() {
    return (
    <div className='container-connexion'>
        <div>
          <img className='logo-connexion' src={LogoManu} alt="logo la manu"/>
            <form className='form-connexion'>
              {/* <label>Identifiant</label> */}
              <input className='input-connexion' placeholder="Nom d'utilisateur ou mail" />

              {/* <label>Mot de passe</label> */}
              <input className='input-connexion' placeholder="Mot de passe" type={'password'} />
              <a className='forgot-mdp-connexion' href="#">Mot de passe oublié ?</a>

              <button className='btn-connexion'>Connexion</button>
            </form>
        </div>
    </div>
    )
  }
}
