import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/BlocNavigation.css';

export class Parts extends Component {
  render() {

    return (
      <div>
          <div className='all-bloc-navigation'>
            <Link to="/ajouter-parties" className='bloc-navigation pop-up-add'>Ajouter une partie</Link>
            <Link to="/modifier-parties" className='bloc-navigation pop-up-update'>Modifier une partie</Link>
            <Link to="/supprimer-parties" className='bloc-navigation pop-up-delete'>Supprimer une partie</Link>
          </div>
          
      </div>
    )
  }
}

export default Parts