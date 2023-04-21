import React, { useEffect, useState } from "react";
import ImgAnnouncement from '../assets/img/logo_la_manu.png'
import '../css/styles.css';

export default function IndexJobsAnnouncements() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      requestAPI('/job-offers', 'GET',null)
        .then(response => response.json())
        .then(data => setJobs(data))
    }, [])

    return (
      <div>
            <h1>Toutes les annonces disponibles</h1>
            <div className='index-jobs-actualites'>
                {jobs.map((job) => (
                    <a href={job.link}>
                        <div className='index-jobs-offers'>
                            <img alt="" src={ImgAnnouncement} />
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