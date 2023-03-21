import React, { Component } from 'react'
import ImgEmargement from '../assets/img/emargement.png'
import { Link } from 'react-router-dom'

import '../css/Emargement.css';

export default class Emargement extends Component {
  render() {
    return (
      <div>

            <h2>Vos formations</h2>

            <div className="all-emargement">
                <div className="signature-emargement">
                    <img alt="Emargement La Manu" className="img-emargement" src={ImgEmargement}/>
                    <p>CDA 1 - Compiègne</p>
                    {/* Renvoie le formateur dans la page liste émargements et envoie simultanément un e-mail
                    avec le lien de l'émargement aux étudiants concernant par la formation sélectionné */}
                    <Link to="/liste-emargements"><button className="btn-emargement">Lancer l'émargement</button></Link>
                </div>

                <div className="signature-emargement">
                    <img alt="Emargement La Manu" className="img-emargement" src={ImgEmargement}/>
                    <p>WW3 - Versailles</p>
                    {/* Renvoie le formateur dans la page liste émargements et envoie simultanément un e-mail
                    avec le lien de l'émargement aux étudiants concernant par la formation sélectionné */}
                    <Link to="/liste-emargements"><button className="btn-emargement">Lancer l'émargement</button></Link>
                </div>

                <div className="signature-emargement">
                    <img alt="Emargement La Manu" className="img-emargement" src={ImgEmargement}/>
                    <p>Formation de deux mois</p>
                    {/* Renvoie le formateur dans la page liste émargements et envoie simultanément un e-mail
                    avec le lien de l'émargement aux étudiants concernant par la formation sélectionné */}
                    <Link to="/liste-emargements"><button className="btn-emargement">Lancer l'émargement</button></Link>
                </div>

                <div className="signature-emargement">
                    <img alt="Emargement La Manu" className="img-emargement" src={ImgEmargement}/>
                    <p>Nom de la formation</p>
                    {/* Renvoie le formateur dans la page liste émargements et envoie simultanément un e-mail
                    avec le lien de l'émargement aux étudiants concernant par la formation sélectionné */}
                    <Link to="/liste-emargements"><button className="btn-emargement">Lancer l'émargement</button></Link>
                </div>

                <div className="signature-emargement">
                    <img alt="Emargement La Manu" className="img-emargement" src={ImgEmargement}/>
                    <p>Noyon - Compiègne</p>
                    {/* Renvoie le formateur dans la page liste émargements et envoie simultanément un e-mail
                    avec le lien de l'émargement aux étudiants concernant par la formation sélectionné */}
                    <Link to="/liste-emargements"><button className="btn-emargement">Lancer l'émargement</button></Link>
                </div>

                <div className="signature-emargement">
                    <img alt="Emargement La Manu" className="img-emargement" src={ImgEmargement}/>
                    <p>Error 404</p>
                    {/* Renvoie le formateur dans la page liste émargements et envoie simultanément un e-mail
                    avec le lien de l'émargement aux étudiants concernant par la formation sélectionné */}
                    <Link to="/liste-emargements"><button className="btn-emargement">Lancer l'émargement</button></Link>
                </div>
            </div>
            

      </div>
    )
  }
}
