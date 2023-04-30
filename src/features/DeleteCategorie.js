import React, { useEffect, useState, useContext } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";

const DeleteCategorie = () => {

  const {requestAPI} = useContext(ApiContext);
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    requestAPI('/categories', 'GET',null)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/categories/' + categoryID, 'DELETE', null)
      .then(response => response.json())
      .then(data => console.log(data))
  }
  
    return (
      <div>
        <form>
          <select onChange={(event) => {setCategoryID(event.target.value)}} value={categoryID}>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>{categorie.id} : {categorie.categorie}</option>
            ))}
          </select>
          <button type="submit" onClick={handleSubmit}>Effacer</button>
        </form>
      </div>
    )
  }

export default DeleteCategorie;