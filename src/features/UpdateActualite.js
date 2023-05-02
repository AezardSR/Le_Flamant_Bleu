import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateActualite = () => {
  const { actualitesID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [actualites, setActualites] = useState({ title: '', content: '', publication_date: '', author: '' });

  useEffect(() => {
    requestAPI('/actualites/' + actualitesID, 'GET',null)
      .then(response => response.json())
      .then(data => setActualites(data));

  }, [actualitesID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActualites(prevActualites => ({ ...prevActualites, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/actualites/' + actualitesID, 'PATCH', {title: actualites.title, content: actualites.content, publication_date: actualites.publication_date, author: actualites.author})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="title-lessons">Modifier un article</h1>
      <div className='form-container'>
      <form className="flex-column form-add" onSubmit={handleSubmit}>
            <div className='container-label-input-form'>
              <label className="label-form" htmlFor="title">Titre à modifier</label>
              <input type="text" id="title" name="title" value={actualites.title} onChange={handleInputChange} />
            </div>

            <div className='container-label-input-form'>
              <label className="label-form" htmlFor="publication_date">Date à modifier</label>
              <input type="date" id="publication_date" name="publication_date" value={actualites.publication_date} onChange={handleInputChange} />
            </div>
            <div className='container-label-input-form'>
              <label className="label-form" htmlFor="content">Contenu à modifier</label>
              <textarea value={actualites.content} name="content" onChange={handleInputChange}></textarea>
            </div>
            <div className='container-label-input-form'>
              <label className="label-form" htmlFor="author">Auteur à modifier</label>
              <input type="text" id="author" name="author" value={actualites.author} onChange={handleInputChange} />
            </div>
            <div className='btn-container'>
            <button className="pointer btn-connexion" type='submit'>Modifier l'article</button>
            </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateActualite;
