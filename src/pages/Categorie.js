import React, { Component, useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

function Categorie() {

    const {requestAPI} = useContext(ApiContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        requestAPI('/categories', 'GET',null)
          .then(response => response.json())
          .then(data => setCategories(data))
    }, [])

    function deleteID(id) {
      requestAPI('/categories/' + id, 'DELETE', null)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div className='flex-wrap'>
            {categories.map((categorie) => (
                <div className='block-categories-parts flex-between' id={categorie.id} key={categorie.id} value={categorie.id}>
                    <p>{categorie.categorie}</p>
                    <div className='flex'>
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