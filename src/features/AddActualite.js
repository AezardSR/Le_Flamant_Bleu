import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

const AddActualite = () => {

    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);
    const [publicationDate, setPublicationDate] = useState([]);
    const [author, setAuthor] = useState([]);
    const {requestAPI} = useContext(ApiContext);

    const handleSubmit = (event) => {
        requestAPI('/actualites', 'POST', {title: title, content: content, publication_date: publicationDate, author: author})
            .then(response => response.json())
            .then(data => console.log(data))
            event.preventDefault();
    }

    return (
      <div>
      <h1 className="title-lessons">Ajouter une actualité</h1>
      <div className='form-container'>
        <form className='form-add-event-planning'>
            <div className='container-label-input-form'>
            <label className="label-form" htmlFor='dateOffers'>Date</label>
                <input value={publicationDate} onChange={(event) => {setPublicationDate(event.target.value)}} name="dateOffers" type="date"></input>
            </div>
            <div className='container-label-input-form'>
                <label className="label-form" htmlFor='titleDetails'>Titre</label>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} name="titleDetails" className='add-event-description-title' placeholder='Titre -'></input>
            </div>
            <div className='container-label-input-form'>
                <label className="label-form" htmlFor='descriptionDetails'>Détails</label>
                <textarea value={content} onChange={(event) => {setContent(event.target.value)}} name="descriptionDetails" placeholder='Détails -'></textarea>
            </div>
            <div className='container-label-input-form' >
            <label className="label-form" htmlFor='titleDetails'>Auteur(e)</label>
            <input value={author} onChange={(event) => {setAuthor(event.target.value)}} name="titleDetails" className='add-event-description-title' placeholder='Author -'></input>

            </div>
            <div className='btn-container'>
                <a href="/nos-actualites"><button onClick={handleSubmit} type="submit" className="btn-connexion">Ajouter</button></a>
            </div>
        </form>
        </div>
      </div>
    )
}

export default AddActualite