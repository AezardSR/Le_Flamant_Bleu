import React, { useState, useEffect } from "react";

const AddParts = () => {

  const [part, setPart] = useState([]);

  const [categories, setCategories] = useState([]);
  const [categoriesID, setCategoriesID] = useState([]);

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: part, categories_id: categoriesID})
    };

    fetch('http://localhost:8000/api/parts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div>
      <form>
        <label>Nom de la partie :</label>
        <input type="text" name="categorie" value={part} onChange={(event) => {setPart(event.target.value)}} />

        <select value={categoriesID} onChange={e => setCategoriesID(e.target.value)}>
          <option value="">--Choisir une option--</option>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>{categorie.categorie}</option>
          ))}
        </select>


        <button type="submit" onClick={handleSubmit}>Ajouter la catégorie</button>
      </form>
    </div>
  )
}

export default AddParts;