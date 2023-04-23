import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import '../css/styles.css';

export class MaFormation extends Component {
  render() {
    return (
      <div>
          <h2 className='title title-ma-formation'>Ma formation</h2>

          <div className='all-bloc-navigation'>
          
            <Link to="/cours" className='bloc-navigation navigation-lesson'><FontAwesomeIcon icon={faGraduationCap} />Mes cours</Link>
            <Link to="/exercices" className='bloc-navigation navigation-exercice'><FontAwesomeIcon icon={faLaptopCode} />Mes exercices</Link>
            <Link to="/calendrier" className='bloc-navigation navigation-planning'><FontAwesomeIcon icon={faCalendar} />Mon planning</Link>

          </div>
          
      </div>
    )
  }
}

export default MaFormation