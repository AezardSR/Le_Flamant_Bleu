import React, { useEffect, useState } from "react";

const DeleteCategorie = () => {

  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/categories/`)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'DELETE'
    };
    fetch(`${process.env.REACT_APP_API_PATH}/categories/` + categoryID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
    event.preventDefault();
    console.log(categoryID);
  }
  
    return (
      <div>
        <form>
          <select onChange={(event) => {setCategoryID(event.target.value)}} value={categoryID}>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>{categorie.id} : {categorie.categorie}</option>
            ))}
          </select>
          <button type="submit" onClick={handleSubmit}>Delete</button>
        </form>
      </div>
    )
  }

export default DeleteCategorie;