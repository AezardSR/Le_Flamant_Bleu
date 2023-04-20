import React, { Component, useContext } from 'react'
import LogoManu from '../assets/img/logo_la_manu.png'
<<<<<<< Updated upstream
import "../css/PageProfilUtilisateur.css"
=======
import '../css/styles.css';
import { ApiContext } from '../features/APIToken/ApiContext';
>>>>>>> Stashed changes

export default function PageProfilUtilisateur(){

  const [] = useContext(ApiContext)

  
    return(
      
        <section className="section-profil-user">
             <div className='container-profil'>
                <div className='container-img'>
                  <img className='img-profil' src={LogoManu} />
                </div>
                <form action='' method='POST'>
                  <div className='container-form'>
                    <div className='container-input'>
                      <label htmlfor="name">Prénom</label>
                      <input name='name' className='input-profil' type={"text"} placeholder='Prénom' />
                    </div>
                    <div className='container-input'>
                    <label htmlfor="mail">Email</label>
                    <input name='mail' className='input-profil' type={"mail"} placeholder='Email' />
                    </div>
                    <div className='container-input'>
                      <label htmlfor="phone-number">Téléphone</label>
                      <input name='phone-number' className='input-profil' type={"text"} placeholder='Téléphone' />
                    </div>
                    <div className='container-input'>
                      <label htmlfor="city">Ville</label>
                      <input name='city' className='input-profil' type={"text"} placeholder='Ville' />
                    </div>
                    <div className='container-input'>
                      <label htmlfor="postal-code">Code Postal</label>
                      <input name='postal-code' className='input-profil' type={"text"} placeholder='Code Postal' />
                    </div>
                    <div className='container-input'>
                      <label htmlfor="address">Adresse</label>
                      <input name='address' className='input-profil' type={"text"} placeholder='Adresse' />
                    </div>
                    <div className='container-input'>
                      <label htmlfor="password">Mot de passe</label>
                      <input name='password' className='input-profil' type={"password"} placeholder='Mot de passe' />
                    </div>
                    <div className='container-input'>
                      <label htmlfor="confirm-password">Confirmation Mot de passe</label>
                      <input name='confirm-password' className='input-profil' type={"password"} placeholder='Confirmation de mot de passe' />
                    </div>
                  </div>
                  <div className='container-btn'>
                    <button className='btn-profil' type={"submit"}>Modifier</button>
                    <button className='btn-profil' type={"submit"}>Valider</button>
                  </div>
                </form>
             </div>
        </section> 
    )
  }

