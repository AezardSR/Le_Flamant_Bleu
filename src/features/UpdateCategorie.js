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
      <h2>Modifier une catégorie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Nom à modifier :</label>
          <input type="text" id="name" name="category" value={category.categorie} onChange={handleInputChange} />
        </div>
        <button type="submit">Modifier la catégorie</button>
      </form>
    </div>
  );
};

export default UpdateCategorie;
