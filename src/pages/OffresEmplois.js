import React, { Component, useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

function OffresEmplois() {

    const [jobsOffers, setJobsOffers] = useState([]);
    const {requestAPI} = useContext(ApiContext);

    useEffect(() => {
        requestAPI('/job-offers', 'GET',null)
          .then(response => response.json())
          .then(data => setJobsOffers(data))
    }, [])

    function deleteID(id) {
      requestAPI('/job-offers/' + id, 'DELETE', null)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div className='flex-wrap'>
            {jobsOffers.map((jobsOffer) => (
                <div className='block-categories-parts flex-between' id={jobsOffer.id} key={jobsOffer.id} value={jobsOffer.id}>
                    <p>{jobsOffer.name}</p>
                    <div className='flex'>
                      <button className='button-delete pointer' onClick={() => deleteID(jobsOffer.id)}>Effacer</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-offres-emplois/" + jobsOffer.id}>Modifier</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <Link to='/ajouter-annonce-emploi'><button className="link-lesson-add mar-vertical-10px pointer">Ajouter une offre d'emploi</button></Link>
      </div>
    )
}

export default OffresEmplois;