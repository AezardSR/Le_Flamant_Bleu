import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PartnerPoleEmploi from '../../assets/img/pole_emploi.png'
import PartnerHautFrance from '../../assets/img/haut_de_france.png'
import PartnerIleFrance from '../../assets/img/ile_de_france.png'
import PartnerNormandie from '../../assets/img/normandie.png'
import ImgAnnouncement from '../../assets/img/logo_la_manu.png'
import '../../css/JobsAnnouncements.css';

export default class JobsAnnouncements extends Component {
  render() {
    return (
        <div className='page-jobs-actualites'>
            <div className='img-jobs-partner'>
                <a className='url-jobs-partner' href="https://www.hautsdefrance.fr/mot/travail-emploi/" target="_blank" rel="noreferrer"><img src={PartnerHautFrance}></img></a>
                <a className='url-jobs-partner' href="https://www.iledefrance.fr/formation-emploi" target="_blank" rel="noreferrer"><img src={PartnerIleFrance}></img></a>
                <a className='url-jobs-partner' href="https://region-normandie.gestmax.fr/search/1-la-region-normandie" target="_blank" rel="noreferrer"><img src={PartnerNormandie}></img></a>
                <a className='url-jobs-partner' href="https://www.pole-emploi.fr/accueil/" target="_blank" rel="noreferrer"><img src={PartnerPoleEmploi}></img></a>
            </div>

            <div className='jobs-actualites'>
                <a href='https://www.pole-emploi.fr/accueil/'>
                    <div className='jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <h3>Titre de l'annonce</h3>
                        <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                            Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                            Sint sit culpa deserunt dolor aute proident in culpa. 
                            Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                        </p>
                    </div>
                </a>
                

                <a href='https://www.hautsdefrance.fr/mot/travail-emploi/'>
                    <div className='jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <h3>Titre de l'annonce</h3>
                        <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                            Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                            Sint sit culpa deserunt dolor aute proident in culpa. 
                            Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                        </p>
                    </div>
                </a>

                <a href='https://www.iledefrance.fr/formation-emploi'>
                    <div className='jobs-offers'>
                        <img src={ImgAnnouncement} />
                        <h3>Titre de l'annonce</h3>
                        <p>Veniam laboris eiusmod ut commodo excepteur officia qui dolor eiusmod aute pariatur magna culpa. 
                            Labore irure ut nulla nulla exercitation officia esse voluptate officia nostrud. 
                            Sint sit culpa deserunt dolor aute proident in culpa. 
                            Incididunt culpa veniam pariatur dolore eu aute ipsum irure mollit laboris incididunt ex ex nulla.
                        </p>
                    </div>
                </a>
            </div>
            
            <div className='btn-jobs'>
                <Link to='/index_annonce_emploi'><button className='btn-jobs-announcements'>Voir toutes les annonces</button></Link>
                <Link to='/ajouter_annonce_emploi'><button className='btn-jobs-announcements'>Ajouter une annonce</button></Link>
            </div>
        </div>
    )
  }
}
