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
      <h1 className="mar-vertical-10px mar-left-10px">Ajouter une catégorie</h1>
      <form className="flex-column form-add">
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form">Nom de la catégorie:</label>
            <input type="text" name="categorie" value={category} onChange={(event) => {setCategory(event.target.value)}} />
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type="submit" onClick={handleSubmit}>Ajouter la catégorie</button>
      </form>
    </div>
  )
}

export default AddCategorie;