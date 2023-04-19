import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateActualite = () => {
  const { actualitesID } = useParams();

  const [actualites, setActualites] = useState({ title: '', content: '', publication_date: '', author: '' });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/actualites/${actualitesID}`)
      .then(response => response.json())
      .then(data => setActualites(data));

  }, [actualitesID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActualites(prevActualites => ({ ...prevActualites, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: actualites.title, content: actualites.content, publication_date: actualites.publication_date, author: actualites.author})
    };
    fetch(`${process.env.REACT_APP_API_PATH}/actualites/` + actualitesID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier un article</h1>

      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="title">Titre à modifier</label>
            <input type="text" id="title" name="title" value={actualites.title} onChange={handleInputChange} />

            <label className="label-form" htmlFor="publication_date">Date à modifier</label>
            <input type="date" id="publication_date" name="publication_date" value={actualites.publication_date} onChange={handleInputChange} />
            
            <label className="label-form" htmlFor="content">Contenu à modifier</label>
            <textarea value={actualites.content} name="content" onChange={handleInputChange}></textarea>

            <label className="label-form" htmlFor="author">Auteur à modifier</label>
            <input type="text" id="author" name="author" value={actualites.author} onChange={handleInputChange} />
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type='submit'>Modifier l'article</button>
      </form>
    </div>
  );
};

export default UpdateActualite;
