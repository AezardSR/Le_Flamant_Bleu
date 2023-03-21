import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../css/AddLesson.css';

const AddExercice = () => {

  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState([]);
  const [file, setFile] = useState([]);
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: title, content: description, image: image, file: file, categorie_id: categoryID})
    };

    fetch('http://localhost:8000/api/exercices', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

return (
  <div>
    <form className="form-add-lesson">
          <div className='form-add-lesson-add-pdf'>
              <label>Image</label>
              <input value={image} onChange={(event) => {setImage(event.target.value)}} type="file" className="form-add-lesson-pdf" placeholder="Veuillez insérer un fichier pdf"></input>

              <label>File</label>
              <input value={file} onChange={(event) => {setFile(event.target.value)}} type="file" className="form-add-lesson-pdf" placeholder="Veuillez insérer un fichier pdf"></input>
          </div>

          <div className='form-add-lesson-add-title'>
              <input value={title} onChange={(event) => {setTitle(event.target.value)}} name="name" className="form-add-lesson-title" placeholder="Insérer titre"></input>
          </div>

          <div className='form-add-lesson-add-details'>
              <div className='form-add-lesson-select-categorie'>
                  <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setCategoryID(event.target.value)}} value={categoryID}>
                    {categories.map((categorie) => (
                      <option key={categorie.id} value={categorie.id}>{categorie.id} : {categorie.categorie}</option>
                    ))}
                  </select>
              </div>
              <div className='form-add-lesson-add-description'>
                  <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} name="content" className="form-add-lesson-description" placeholder="Description de l'exercice"></textarea>
                  <Link to="/exercices"><button onClick={handleSubmit} type="submit" className="btn btn-form-add-lesson">Valider l'exercice</button></Link>
              </div>
          </div>
      </form>
  </div>
  )
}

export default AddExercice;