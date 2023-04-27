import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNewspaper, faChalkboardTeacher, faSignature} from "@fortawesome/free-solid-svg-icons";
import '../css/styles.css';

export class Admin extends Component {
  render() {
    return (
      <div>
          <h2 className='title title-ma-formation'>Menu administratif</h2>

          <div className='all-bloc-navigation'>
          
            {/* <Link to="/emargements" className='bloc-navigation navigation-lesson'><FontAwesomeIcon icon={faSignature} />Les émargements</Link>
            <Link to="#" className='bloc-navigation navigation-exercice'><FontAwesomeIcon icon={faChalkboardTeacher} />Tests d'admissions</Link>
            <Link to="/ajouter-actualite" className='bloc-navigation navigation-categorie'><FontAwesomeIcon icon={faNewspaper} />Actualités</Link> */}
            <Link to="/actualites" className='bloc-navigation navigation-categorie'>Gestion des actualités</Link>
            <Link to="/gestion-cours" className='bloc-navigation navigation-lesson'>Gestion des cours</Link>
            <Link to="/gestion-exercices" className='bloc-navigation navigation-exercice'>Gestion des exercices</Link>
            <Link to="/categorie" className='bloc-navigation navigation-categorie'>Gestion des catégories</Link>
            <Link to="/parties" className='bloc-navigation navigation-partie'>Gestion des parties</Link>
            <Link to="/offres-emplois" className='bloc-navigation navigation-partie'>Gestion des offres d'emplois</Link>
            <a href="/register" className='bloc-navigation navigation-categorie'><FontAwesomeIcon icon={faNewspaper} />Inscripion d'utilisateur</a>

          </div>
          
      </div>
    )
  }
}

export default Admin