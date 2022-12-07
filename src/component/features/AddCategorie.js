import React, { useState } from "react";

const AddCategorie = () => {

  const [categorie, setCategorie] = useState([]);

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({categorie: categorie})
    };
    console.log(categorie);
    fetch('http://localhost:8000/api/categories', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }
  return (
    <div>
      <form>
        <label>Nom de la catégorie:</label>
        <input type="text" name="categorie" onChange={(event) => {setCategorie(event.target.value)}} />
        <button type="submit" onClick={handleSubmit}>Ajouter la catégorie</button>
      </form>
    </div>
  )
}

export default AddCategorie;