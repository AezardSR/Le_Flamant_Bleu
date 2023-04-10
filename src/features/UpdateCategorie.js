import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCategorie = () => {
  const { categoriesID } = useParams();

  const [categories, setCategories] = useState({ categorie: '' });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/categories/`)
      .then(response => response.json())
      .then(data => setCategories(data));

  }, [categoriesID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategories(prevCategories => ({ ...prevCategories, [name]: value }));
  };

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({categorie: category})
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
          <label htmlFor="categorie">Nom à modifier :</label>
          <input type="text" id="name" name="categorie" value={categories.categorie} onChange={handleInputChange} />
        </div>
        <button type="submit">Modifier la leçon</button>
      </form>
    </div>
  );
};

export default UpdateCategorie;
