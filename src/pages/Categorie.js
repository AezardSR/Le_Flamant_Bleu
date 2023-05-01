import React, { Component, useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';
//ApiContext permet de faire des appels depuis une API externe
import { ApiContext } from "../features/APIToken/ApiContext";

function Categorie() {

  //On définit requestAPI pour réaliser des appels d'API depuis ApiContext
    const {requestAPI} = useContext(ApiContext);
    //On définit une constante pour les catégories
    const [categories, setCategories] = useState([]);

    //On récupère les catégories et on les met dans categories
    useEffect(() => {
        requestAPI('/categories', 'GET',null)
          .then(response => response.json())
          .then(data => setCategories(data))
    }, [])

    //On créer une fonction pour l'action DELETE pour l'insérer dans un bouton
    function deleteID(id) {
      //Appel api avec son url par l'id sélectionné + la méthode + le body a null
      requestAPI('/categories/' + id, 'DELETE', null)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div className='flex-wrap'>
            {/* Le .map permet de faire une boucle sur les données */}
            {categories.map((categorie) => (
                <div className='block-categories-parts flex-between' id={categorie.id} key={categorie.id} value={categorie.id}>
                    <p>{categorie.categorie}</p>
                    <div className='flex'>
                      {/* On place la fonction deleteID dans le bouton et activé s'il y a un clic par le onClick */}
                      <button className='button-delete pointer' onClick={() => deleteID(categorie.id)}>Effacer</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-categorie/" + categorie.id}>Modifier</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <Link to="/ajouter-categorie"><button className="link-lesson-add mar-vertical-10px pointer">Ajouter une catégorie</button></Link>
      </div>
    )
}

export default Categorie;