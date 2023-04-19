import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateActualite = () => {

  const { actualitesID } = useParams();

  const [actualites, setActualites] = useState({ title: '', content: '', publication_date: '', author: '' });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/actualites/`)
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
        body: JSON.stringify({actualites: actualitesID})
    };
    fetch(`${process.env.REACT_APP_API_PATH}/actualites/` + actualitesID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une actualité</h1>

      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="actualites">Titre</label>
            <input type="text" id="name" name="actualites" value={actualites.title} onChange={handleInputChange} />
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type="submit">Modifier l'actualité</button>
      </form>

    </div>
  );
};

export default UpdateActualite;
