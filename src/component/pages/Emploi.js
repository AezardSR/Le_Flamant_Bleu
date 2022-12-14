import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import '../../css/BlocNavigation.css';

export class Emploi extends Component {
  render() {
    return (
      <div>
          <h2 className='title title-section-emploi'>Section Emploi</h2>

          <div className='all-bloc-navigation'>
          
            <Link to="/annonces_emplois" className='bloc-navigation navigation-lesson'><FontAwesomeIcon icon={faAddressBook} />Offres d'emploi</Link>
            <Link to="/listUser" className='bloc-navigation navigation-exercice'><FontAwesomeIcon icon={faAddressCard} />Fiches d'informations</Link>

          </div>
          
      </div>
    )
  }
}

export default Emploi