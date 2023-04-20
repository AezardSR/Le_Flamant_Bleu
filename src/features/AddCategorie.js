import React, { useContext, useState } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";

const AddCategorie = () => {
  const {requestAPI} = useContext(ApiContext);
  const [category, setCategory] = useState([]);

  const handleSubmit = (event) => {

  requestAPI('/categories', 'POST', {categorie: category})
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>Nom de la catégorie:</label>
        <input type="text" name="categorie" value={category} onChange={(event) => {setCategory(event.target.value)}} />
        <button type="submit" onClick={handleSubmit}>Ajouter la catégorie</button>
      </form>
    </div>
  )
}

export default AddCategorie;