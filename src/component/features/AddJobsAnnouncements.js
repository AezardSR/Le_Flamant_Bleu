import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/AddJobsAnnouncements.css';

const AddJobsAnnouncements = () => {

  
    return (
      <div>

        <form className='form-jobs'>
            <div className='form-jobs-first-column'>
                <div>
                  <label>Ajouter une image</label>
                  <input type="file"></input>
                </div>
                <input className='form-jobs-url' placeholder="https://"></input>
            </div>

            <input className='form-jobs-title' placeholder="Titre de l'annonce"></input>
            <textarea className='form-jobs-description' placeholder="Description de l'annonce"></textarea>

            <Link to="/annonces_emplois"><button type="submit" className="btn btn-form-jobs">Ajouter</button></Link>
        </form>

      </div>
    )
}

export default AddJobsAnnouncements;