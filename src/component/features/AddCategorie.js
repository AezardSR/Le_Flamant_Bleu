import React, { useState } from "react";

const AddCategorie = () => {

  const [category, setCategory] = useState([]);

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({categorie: category})
    };

    fetch('http://localhost:8000/api/categories', requestOptions)
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