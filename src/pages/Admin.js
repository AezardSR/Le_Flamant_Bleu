import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNewspaper, faChalkboardTeacher, faSignature} from "@fortawesome/free-solid-svg-icons";
import '../css/BlocNavigation.css';

export class Admin extends Component {
  render() {
    return (
      <div>
          <h2 className='title title-ma-formation'>Menu administratif</h2>

          <div className='all-bloc-navigation'>
          
            <Link to="/emargements" className='bloc-navigation navigation-lesson'><FontAwesomeIcon icon={faSignature} />Les émargements</Link>
            <Link to="#" className='bloc-navigation navigation-exercice'><FontAwesomeIcon icon={faChalkboardTeacher} />Tests d'admissions</Link>
            <Link to="/ajouter-actualite" className='bloc-navigation navigation-categorie'><FontAwesomeIcon icon={faNewspaper} />Actualités</Link>

          </div>
          
      </div>
    )
  }
}

export default Admin