import React, { Component, useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

function Actualites() {

    const [actualites, setActualites] = useState([]);
    const {requestAPI} = useContext(ApiContext);

    useEffect(() => {
        requestAPI('/actualites', 'GET',null)
          .then(response => response.json())
          .then(data => setActualites(data))
    }, [])

    function deleteID(id) {
      requestAPI('/actualites/' + id, 'DELETE', null)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div className='flex-wrap'>
            {actualites.map((actualite) => (
                <div className='block-categories-parts flex-between' id={actualite.id} key={actualite.id} value={actualite.id}>
                    <p>{actualite.title}</p>
                    <div className='flex'>
                      <button className='button-delete pointer' onClick={() => deleteID(actualite.id)}>Effacer</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-actualite/" + actualite.id}>Modifier</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <a href="/ajouter-actualite"><button className="link-lesson-add mar-vertical-10px pointer">Ajouter une actualité</button></a>
      </div>
    )
}

export default Actualites;