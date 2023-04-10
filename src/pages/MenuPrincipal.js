import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '../assets/img/leroy.jpg'
import LaManu from '../assets/img/logo_la_manu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip , faGear, faHome, faGraduationCap, faMessage, faCircleQuestion, faGlobe, faAddressBook, faDoorClosed} from "@fortawesome/free-solid-svg-icons";
import '../css/MenuPrincipal.css';
import '../css/global.css';
import { ApiContext } from "../features/APIToken/ApiContext";


function Main() {
    const {user} = useContext(ApiContext);
    const navigate = useNavigate();
    let userInfo = user.user;

    const logout = () =>{
        localStorage.removeItem("token");
        navigate('/login');
    }
    const userName = () =>{
        if(userInfo && userInfo.firstname){
            return userInfo.firstname
        } else {
            return null
        }
    }

        return(
            <div className="menu-principal">
                <div className="avatar-menu">
                    <img src={Avatar} alt="avatar de la personne" className="img-menu-avatar"/>
                    <p>{userName()}</p>
                    <div className='avatar-menu-parametre'>
                        <a href="/profile"><FontAwesomeIcon icon={faGear} style={{color: 'white'}} /></a>
                        <a href="/login" onClick={logout}><FontAwesomeIcon icon={faDoorClosed} style={{color: 'white'}} /></a>
                    </div>
                </div>
                <div className="listing-menu">
                    <ul className="ul-listing-menu">
                        <a href="/"><li><FontAwesomeIcon icon={faHome} />Tableau de bord</li></a>
                        <a href="/ma-formation"><li><FontAwesomeIcon icon={faGraduationCap} />Ma formation</li></a>
                        {/* <a href="/calendrier"><li><FontAwesomeIcon icon={faCalendar} />Calendrier</li></a>
                        <a href="/cours"><li><FontAwesomeIcon icon={faGraduationCap} />Cours</li></a>
                        <a href="/exercices"><li><FontAwesomeIcon icon={faLaphrefpCode} />Exercices</li></a> */}
                        <a href="/"><li><FontAwesomeIcon icon={faMessage} />Messagerie</li></a>
                        <a href="/"><li><FontAwesomeIcon icon={faCircleQuestion} />FAQ</li></a>
                        <a href="/actualites"><li><FontAwesomeIcon icon={faGlobe} />Actualités</li></a>
                        <a href="/emplois"><li><FontAwesomeIcon icon={faAddressBook} />Emplois</li></a>
                        <a href="/admin"><li><FontAwesomeIcon icon={faPaperclip} />Administratifs</li></a>
                        {/* <a href="/annonces-emplois"><li><FontAwesomeIcon icon={faAddressBook} />Offres d'emplois</li></a>
                        <a href="/list-user"><li id="menu-fiche-information"><FontAwesomeIcon icon={faAddressCard} />Fiches d'informations</li></a> */}
                        <a href="https://lamanu.fr/">
                            <img src={LaManu} alt="LOGO" className='logo-menu-principal' style={{width: '70%', height:'auhref'}}/>
                        </a>
                    </ul>
                </div>
            </div>
    )
    }


export default Main;