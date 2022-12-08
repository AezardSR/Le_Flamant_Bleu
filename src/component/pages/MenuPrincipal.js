import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '../../assets/img/leroy.jpg'
import LaManu from '../../assets/img/logo_la_manu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip ,faAddressCard, faGear, faHome, faCalendar, faGraduationCap, faLaptopCode, faMessage, faCircleQuestion, faGlobe, faAddressBook, faDoorClosed} from "@fortawesome/free-solid-svg-icons";
import '../../css/MenuPrincipal.css';
import PropTypes from "prop-types";
import { ApiContext } from "../features/APIToken/apiContext";

var userInfo;

function  getUserInfo() {
    if(localStorage.getItem('token')){
        const userToken = JSON.parse(localStorage.getItem('token'));

    

    userInfo = JSON.parse(fetch('http://localhost:8000/api/user-profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'bearer' + userToken.access_token
        },

        })
        .then(data => data.json()).then(json => console.log(json)))
    return userInfo.firstname
}
}


function Main() {
            return (
            <ApiContext.Consumer>
                <div className="menu-principal">
                    <div className="avatar-menu">
                        <img src={Avatar} alt="avatar de la personne" className="img-menu-avatar"/>
                        <p>{value => setToken}</p>
                        <div className='avatar-menu-parametre'>
                            <Link to="/profile"><FontAwesomeIcon icon={faGear} style={{color: 'white'}} /></Link>
                            <Link to="/login"><FontAwesomeIcon icon={faDoorClosed} style={{color: 'white'}} /></Link>
                        </div>
                    </div>
                    <div className="listing-menu">
                        <ul className="ul-listing-menu">
                            <Link to="/"><li><FontAwesomeIcon icon={faHome} />Tableau de bord</li></Link>
                            <Link to="/ma-formation"><li><FontAwesomeIcon icon={faGraduationCap} />Ma formation</li></Link>
                            {/* <Link to="/calendrier"><li><FontAwesomeIcon icon={faCalendar} />Calendrier</li></Link>
                            <Link to="/cours"><li><FontAwesomeIcon icon={faGraduationCap} />Cours</li></Link>
                            <Link to="/exercice"><li><FontAwesomeIcon icon={faLaptopCode} />Exercices</li></Link> */}
                            <Link to="/"><li><FontAwesomeIcon icon={faMessage} />Messagerie</li></Link>
                            <Link to="/"><li><FontAwesomeIcon icon={faCircleQuestion} />FAQ</li></Link>
                            <Link to="/actualites"><li><FontAwesomeIcon icon={faGlobe} />Actualités</li></Link>
                            <Link to="/emplois"><li><FontAwesomeIcon icon={faAddressBook} />Emplois</li></Link>
                            <Link to="/admin"><li><FontAwesomeIcon icon={faPaperclip} />Administratifs</li></Link>
                            {/* <Link to="/annonces_emplois"><li><FontAwesomeIcon icon={faAddressBook} />Offres d'emplois</li></Link>
                            <Link to="/listUser"><li id="menu-fiche-information"><FontAwesomeIcon icon={faAddressCard} />Fiches d'informations</li></Link> */}
                            <a href="https://lamanu.fr/">
                                <img src={LaManu} alt="LOGO" className='logo-menu-principal' style={{width: '70%', height:'auto'}}/>
                            </a>
                        </ul>
                    </div>
                </div>
            </ApiContext.Consumer> 
)}


export default Main;