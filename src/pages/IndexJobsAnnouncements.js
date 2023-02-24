import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import ImgAnnouncement from '../assets/img/logo_la_manu.png'
import '../css/IndexJobsAnnouncements.css';

export default function IndexJobsAnnouncements() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        Promise.all([
          fetch('http://localhost:8000/api/jobsoffers'),
        ])
          .then(([resJobs]) =>
            Promise.all([resJobs.json()])  
          )
          .then(([dataJobs]) => {
            setJobs(dataJobs);
          })
      })
    return (
      <div>
            <h1>Toutes les annonces disponibles</h1>
            <div className='index-jobs-actualites'>
                {jobs.map((job) => (
                    <a href={job.link}>
                        <div className='index-jobs-offers'>
                            <img src={ImgAnnouncement} />
                            <div>
                                <h3>{job.name}</h3>
                                <p>{job.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
      </div>
    )
  }