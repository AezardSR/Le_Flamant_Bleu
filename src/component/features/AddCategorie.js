import React from "react";

export default AddCategorie = () => {

  const handleSubmit = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categorie: 'React POST Request Example' })
    };
    fetch('http://localhost:8000/api/categories', requestOptions)
        .then(response => response.json())
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de la catégorie:
          <input type="text" name="categorie" />
        </label>
        <button type="submit">Ajouter la catégorie</button>
      </form>
    </div>
  )
}