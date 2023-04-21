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

        <form className='form-add-event-planning'>
            <div className='add-event-date'>
                <input value={publicationDate} onChange={(event) => {setPublicationDate(event.target.value)}} name="dateOffers" type="date"></input>
            </div>

            <div className='add-event-description'>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} name="titleDetails" className='add-event-description-title' placeholder='Titre -'></input>
                <textarea value={content} onChange={(event) => {setContent(event.target.value)}} name="descriptionDetails" placeholder='Détails -'></textarea>
                <input value={author} onChange={(event) => {setAuthor(event.target.value)}} name="titleDetails" className='add-event-description-title' placeholder='Author -'></input>
            </div>

            <div>
                <Link to="/calendrier"><button onClick={handleSubmit} type="submit" className="btn btn-add-event-planning">Ajouter</button></Link>
            </div>
        </form>
      </div>
    )
}

export default AddActualite