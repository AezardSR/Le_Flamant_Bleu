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
            <div className="p-relative">
                <div className="avatar-menu">
                    <img src={Avatar} alt="avatar de la personne" className="img-menu-avatar"/>
                    <p>{userName()}</p>
                </div>
                <div className="listing-menu">
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul className="ul-listing-menu menu">
                        <div className='avatar-menu-parametre'>
                            <Link to="/profile"><FontAwesomeIcon icon={faGear} style={{color: 'white'}} /></Link>
                            <Link to="/login"><FontAwesomeIcon icon={faDoorClosed} style={{color: 'white'}} /></Link>
                        </div>
                        <Link to="/"><li><FontAwesomeIcon icon={faHome} />Tableau de bord</li></Link>
                        <Link to="/ma-formation"><li><FontAwesomeIcon icon={faGraduationCap} />Ma formation</li></Link>
                        {/* <Link to="/calendrier"><li><FontAwesomeIcon icon={faCalendar} />Calendrier</li></Link>
                        <Link to="/cours"><li><FontAwesomeIcon icon={faGraduationCap} />Cours</li></Link>
                        <Link to="/exercices"><li><FontAwesomeIcon icon={faLaptopCode} />Exercices</li></Link> */}
                        <Link to="/"><li><FontAwesomeIcon icon={faMessage} />Messagerie</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faCircleQuestion} />FAQ</li></Link>
                        <Link to="/actualites"><li><FontAwesomeIcon icon={faGlobe} />Actualités</li></Link>
                        <Link to="/emplois"><li><FontAwesomeIcon icon={faAddressBook} />Emplois</li></Link>
                        <Link to="/admin"><li><FontAwesomeIcon icon={faPaperclip} />Administratifs</li></Link>
                        {/* <Link to="/annonces-emplois"><li><FontAwesomeIcon icon={faAddressBook} />Offres d'emplois</li></Link>
                        <Link to="/list-user"><li id="menu-fiche-information"><FontAwesomeIcon icon={faAddressCard} />Fiches d'informations</li></Link> */}
                        <a href="https://lamanu.fr/">
                            <img src={LaManu} alt="LOGO" className='logo-menu-principal' style={{width: '70%', height:'auto'}}/>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Main;