import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/BlocNavigation.css';

export class Categorie extends Component {
  render() {

    return (
      <div>
          <div className='all-bloc-navigation'>
            <Link to="/ajouter-categorie" className='bloc-navigation pop-up-add'>Ajouter une catégorie</Link>
            <Link to="/modifier-categorie" className='bloc-navigation pop-up-update'>Modifier une catégorie</Link>
            <Link to="/supprimer-categorie" className='bloc-navigation pop-up-delete'>Supprimer une catégorie</Link>
          </div>
          
      </div>
    )
  }
}

export default Categorie