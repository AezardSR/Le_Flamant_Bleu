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
            <Link to="/gestion-promotion" className='bloc-navigation navigation-categorie'>Gestion des promotions</Link>
            <Link to="/cours" className='bloc-navigation navigation-lesson'>Gestion des cours</Link>
            <Link to="/exercices" className='bloc-navigation navigation-exercice'>Gestion des exercices</Link>
            <Link to="/categorie" className='bloc-navigation navigation-categorie'>Gestion des catégories</Link>
            <Link to="/parties" className='bloc-navigation navigation-partie'>Gestion des parties</Link>

          </div>
          
      </div>
    )
  }
}

export default Admin