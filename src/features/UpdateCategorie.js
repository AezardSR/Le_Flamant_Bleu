import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCategorie = () => {
  const { categoryID } = useParams();

  const [category, setCategory] = useState({ categorie: '' });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/categories/`)
      .then(response => response.json())
      .then(data => setCategory(data));

  }, [categoryID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
  };

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({categorie: categoryID})
    };
    fetch(`${process.env.REACT_APP_API_PATH}/categories/` + categoryID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une catégorie</h1>
      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="category">Nom à modifier :</label>
            <input type="text" id="name" name="category" value={category.categorie} onChange={handleInputChange} />
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type="submit">Modifier la catégorie</button>
      </form>
    </div>
  );
};

export default UpdateCategorie;
