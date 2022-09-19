import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImgAnnouncement from '../assets/img/logo_la_manu.png'
import '../css/IndexJobsAnnouncements.css';

export default class IndexJobsAnnouncements extends Component {
  render() {
    return (
      <div>

            <h1>Toutes les annonces disponibles</h1>

            <div className='index-jobs-actualites'>
                <a href='https://www.pole-emploi.fr/accueil/'>
                    <div className='index-jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <div>
                            <h3>Titre de l'annonce</h3>
                            <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                                Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                                Sint sit culpa deserunt dolor aute proident in culpa. 
                                Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                            </p>
                        </div>
                    </div>
                </a>

                <a href='https://www.pole-emploi.fr/accueil/'>
                    <div className='index-jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <div>
                            <h3>Titre de l'annonce</h3>
                            <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                                Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                                Sint sit culpa deserunt dolor aute proident in culpa. 
                                Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                            </p>
                        </div>
                    </div>
                </a>

                <a href='https://www.pole-emploi.fr/accueil/'>
                    <div className='index-jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <div>
                            <h3>Titre de l'annonce</h3>
                            <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                                Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                                Sint sit culpa deserunt dolor aute proident in culpa. 
                                Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                            </p>
                        </div>
                    </div>
                </a>

                <a href='https://www.pole-emploi.fr/accueil/'>
                    <div className='index-jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <div>
                            <h3>Titre de l'annonce</h3>
                            <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                                Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                                Sint sit culpa deserunt dolor aute proident in culpa. 
                                Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            

      </div>
    )
  }
}
