import React, { useEffect, useState } from "react";

const UpdateCategorie = () => {

  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({categorie: category})
    };
    fetch('http://localhost:8000/api/categories/' + categoryID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
    event.preventDefault();
    console.log(categoryID);
    console.log(categories);
    console.log(category);
  }

  return (
    <div>
      <form style={{margin: '10px 15px'}}>
          <div>
            <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setCategoryID(event.target.value)}} value={categoryID}>
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>{categorie.id} : {categorie.categorie}</option>
              ))}
            </select>
          </div>
          <div className="flex-column">
            <input className="w-100 h-45px p-5px" style={{marginBottom: '20px'}} placeholder="Modifier le nom de la catégorie..." type="text" name="categorie" onChange={(event) => {setCategory(event.target.value)}} />
            <button className="link-lesson-add w-20 margin-auto" type="submit" onClick={handleSubmit}>Update</button>
          </div>
      </form>
    </div>
  )
}

export default UpdateCategorie;