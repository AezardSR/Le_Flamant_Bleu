import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';

function ActualitesListing() {

    const [actualites, setActualites] = useState([]);

    useEffect(() => {
          fetch('http://localhost:8000/api/actualites')
          .then(response => response.json())
          .then(data => setActualites(data))
    }, [])

    return (
      <div>
        <h1>Les dernières actualités</h1>
        <div className='flex-column'>
            {actualites.map((actualite) => (
                // <a className='block-actualites-listing' href={"/nos-actualites/actualite/" + actualite.id}>
                    <div id={actualite.id} key={actualite.id} value={actualite.id}>
                        <p className='listing-actu-title'>{actualite.title}</p>
                        <p className='listing-actu-content'>{actualite.content}</p>
                        <p className='listing-actu-detail'>{actualite.publication_date} - {actualite.author}</p>
                    </div>
                // </a>
            ))}
        </div>
      </div>
    )
}

export default ActualitesListing;