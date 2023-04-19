import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateParts = () => {
  const { partsID } = useParams();

  const [parts, setParts] = useState({ name: '', categories_id: '' });
  const [categoriesID, setCategoriesID] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/parts/${partsID}`)
      .then(response => response.json())
      .then(data => setParts(data));

    fetch(`${process.env.REACT_APP_API_PATH}/categories/`)
      .then(response => response.json())
      .then(data => setCategoriesID(data));
  }, [partsID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParts(prevParts => ({ ...prevParts, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: parts.name, categories_id: parts.categories_id})
    };
    fetch(`${process.env.REACT_APP_API_PATH}/parts/` + partsID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une partie</h1>

      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="name">Nom à modifier</label>
            <input type="text" id="name" name="name" value={parts.name} onChange={handleInputChange} />
          </div>
          <div className="flex-column w-500px mar-left-10px">
            <label className="label-form" htmlFor="categories_id">Catégorie à modifier</label>
            <select className="form-select" id="categories_id" name="categories_id" value={parts.categories_id} onChange={handleInputChange}>
              {categoriesID.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.categorie}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type='submit'>Modifier la partie</button>
      </form>
    </div>
  );
};

export default UpdateParts;
