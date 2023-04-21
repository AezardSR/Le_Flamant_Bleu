import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateParts = () => {
  const { partsID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [parts, setParts] = useState({ name: '', categories_id: '' });
  const [categoriesID, setCategoriesID] = useState([]);

  useEffect(() => {
    requestAPI('/parts/' + partsID, 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data));

    requestAPI('/categories', 'GET',null)
      .then(response => response.json())
      .then(data => setCategoriesID(data));
  }, [partsID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParts(prevParts => ({ ...prevParts, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/parts/' + partsID, 'PATCH', {name: parts.name, categories_id: parts.categories_id})
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
