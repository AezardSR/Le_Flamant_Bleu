import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Avatar from '../assets/img/leroy.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faHome, faCalendar, faGraduationCap, faLaptopCode, faMessage, faCircleQuestion, faGlobe, faAddressBook, faDoorClosed} from "@fortawesome/free-solid-svg-icons";
import '../css/MenuPrincipal.css';

class MenuPrincipal extends Component {
    render() {
        return(
            <div className="menu-principal">
                <Link to="/">
                    <div className="avatar-menu">
                        <img src={Avatar} alt="avatar de la personne" className="img-menu-avatar"/>
                        <p>Nom</p>
                        <p>Prénom</p>
                    </div>
                </Link>   
                <div className="listing-menu">
                    <ul className="ul-listing-menu">
                        <Link to="/"><li><FontAwesomeIcon icon={faHome} />Tableau de bord</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faCalendar} />Calendrier</li></Link>
                        <Link to="/cours"><li><FontAwesomeIcon icon={faGraduationCap} />Cours</li></Link>
                        <Link to="/exercice"><li><FontAwesomeIcon icon={faLaptopCode} />Exercices</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faMessage} />Messagerie</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faCircleQuestion} />FAQ</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faGlobe} />Actualité</li></Link>
                        <Link to="/annonces_emplois"><li><FontAwesomeIcon icon={faAddressBook} />Offres d'emplois</li></Link>
                        <Link to="/"><li id="menu-fiche-information"><FontAwesomeIcon icon={faAddressCard} />Fiches d'informations</li></Link>
                        <Link to="/login"><li style={{borderBottom: "1px solid white"}}><FontAwesomeIcon icon={faDoorClosed} />Déconnexion</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuPrincipal;