import React, { useEffect, useState, useContext } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";
import { useParams } from 'react-router-dom';

const UpdateCategorie = () => {
  const { categoryID } = useParams();

  const {requestAPI} = useContext(ApiContext);
  // const [categoryID, setCategoryID] = useState('');
  // const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    requestAPI('/categories', 'GET',null)
      .then(response => response.json())
      .then(data => setCategory(data));

  }, [categoryID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/categories/' + categoryID, 'PATCH', {categorie: category})
      .then(response => response.json())
      .then(data => console.log(data)) 
  }

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
