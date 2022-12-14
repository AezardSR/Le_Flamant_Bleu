import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import PartnerPoleEmploi from '../../assets/img/pole_emploi.png'
import PartnerHautFrance from '../../assets/img/haut_de_france.png'
import PartnerIleFrance from '../../assets/img/ile_de_france.png'
import PartnerNormandie from '../../assets/img/normandie.png'
import ImgAnnouncement from '../../assets/img/logo_la_manu.png'
import '../../css/JobsAnnouncements.css';

export default function JobsAnnouncements() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        Promise.all([
          fetch('http://localhost:8000/api/jobsoffers/?_limit=3'),
        ])
          .then(([resJobs]) =>
            Promise.all([resJobs.json()])  
          )
          .then(([dataJobs]) => {
            setJobs(dataJobs);
          })
      })

    return (
        <div className='page-jobs-actualites'>
            <div className='img-jobs-partner'>
                <a className='url-jobs-partner' href="https://www.hautsdefrance.fr/mot/travail-emploi/" target="_blank" rel="noreferrer"><img src={PartnerHautFrance}></img></a>
                <a className='url-jobs-partner' href="https://www.iledefrance.fr/formation-emploi" target="_blank" rel="noreferrer"><img src={PartnerIleFrance}></img></a>
                <a className='url-jobs-partner' href="https://region-normandie.gestmax.fr/search/1-la-region-normandie" target="_blank" rel="noreferrer"><img src={PartnerNormandie}></img></a>
                <a className='url-jobs-partner' href="https://www.pole-emploi.fr/accueil/" target="_blank" rel="noreferrer"><img src={PartnerPoleEmploi}></img></a>
            </div>

            <div className='jobs-actualites'>
                {jobs.map((job) => (
                    <a href={job.link}>
                        <div className='jobs-offers'>
                            <img src={ImgAnnouncement} />
                            <h3>{job.name}</h3>
                            <p>{job.description}</p>
                        </div>
                    </a> 
                ))}
            </div>
            
            <div className='btn-jobs'>
                <Link to='/index_annonce_emploi'><button className='btn-jobs-announcements'>Voir toutes les annonces</button></Link>
                <Link to='/ajouter_annonce_emploi'><button className='btn-jobs-announcements'>Ajouter une annonce</button></Link>
            </div>
        </div>
    )
  }