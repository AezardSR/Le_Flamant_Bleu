import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import PartnerPoleEmploi from '../assets/img/pole_emploi.png'
import PartnerHautFrance from '../assets/img/haut_de_france.png'
import PartnerIleFrance from '../assets/img/ile_de_france.png'
import PartnerNormandie from '../assets/img/normandie.png'
import ImgAnnouncement from '../assets/img/logo_la_manu.png'
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

export default function JobsAnnouncements() {
    const [jobs, setJobs] = useState([]);
    const {requestAPI} = useContext(ApiContext);
    useEffect(() => {
        requestAPI('/job-offers', 'GET',null)
          .then(response => response.json())
          .then(data => setJobs(data))
      }, [])

    return (
        <div className='page-jobs-actualites'>
            <h1 className="text-center mar-top-10px mar-left-10px">Les dernières offres d'emplois</h1>
            {/* <div className='img-jobs-partner'>
                <a className='url-jobs-partner' href="https://www.hautsdefrance.fr/mot/travail-emploi/" target="_blank" rel="noreferrer"><img alt="" src={PartnerHautFrance}></img></a>
                <a className='url-jobs-partner' href="https://www.iledefrance.fr/formation-emploi" target="_blank" rel="noreferrer"><img alt="" src={PartnerIleFrance}></img></a>
                <a className='url-jobs-partner' href="https://region-normandie.gestmax.fr/search/1-la-region-normandie" target="_blank" rel="noreferrer"><img alt="" src={PartnerNormandie}></img></a>
                <a className='url-jobs-partner' href="https://www.pole-emploi.fr/accueil/" target="_blank" rel="noreferrer"><img alt="" src={PartnerPoleEmploi}></img></a>
            </div> */}

            <div className='jobs-actualites'>
                {/* .slice(-3) permet d'afficher que les 3 dernières JobsOffers */}
                {jobs.slice(-4).map((job) => (
                    <a href={job.link}>
                        <div className='jobs-offers'>
                            <img alt="" src={ImgAnnouncement} />
                            <h3>{job.name}</h3>

                            <p class="jobs-date">{job.dateOffers}</p>
                        </div>
                    </a> 
                ))}
            </div>
            
            <div className='btn-jobs'>
                <Link to='/index-annonce-emploi'><button className='btn-jobs-announcements'>Voir toutes les annonces</button></Link>
            </div>
        </div>
    )
  }