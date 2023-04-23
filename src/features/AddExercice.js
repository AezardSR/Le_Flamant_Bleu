import React, { useEffect, useState, useContext } from "react";
import { getByTitle } from "@testing-library/react";
import { Link } from 'react-router-dom'
import '../css/styles.css';
import { ApiContext } from '../features/APIToken/ApiContext';

const AddExercice = () => {

  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState([]);
  const [file, setFile] = useState([]);
  const [partsID, setPartsID] = useState('');
  const [parts, setParts] = useState([]);  
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  const {requestAPI} = useContext(ApiContext);

  useEffect(() => {
    requestAPI('/parts', 'GET', null)
      .then(response => response.json())
      .then(data => setParts(data))
      .catch(error => console.log(error))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/exercices', 'POST', {name: title, content: description, image: " ", file: " ", parts_id: partsID})
        .then(response => response.json())
        .then(data => console.log(data))
  }

    return (
      <div>
        <form className="form-add-lesson">

            <div className='form-add-lesson-add-title'>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} className="form-add-lesson-title" placeholder="Insérer titre"></input>
            </div>

            <div className='form-add-lesson-add-details'>
                <div className='form-add-lesson-select-categorie'>
                  <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setPartsID(event.target.value)}} value={partsID}>
                    <option value="">--Choisir une option--</option>
                    {parts.map((part) => (
                      <option key={part.id} value={part.id}>{part.id} : {part.name}</option>
                    ))}
                  </select>
                  {/* <input value={image} onChange={(event) => {setImage(event.target.value)}} className="form-add-lesson-duration" placeholder="A changer le input pour image"></input>
                  <input value={file} onChange={(event) => {setFile(event.target.value)}} className="form-add-lesson-duration" placeholder="A changer le input pour file"></input> */}
                </div>
            </div>

            <div className='form-add-lesson-add-description'>
                <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} className="form-add-lesson-description" placeholder="Description du cours"></textarea>
                <button onClick={handleSubmit} type="submit" className="btn btn-form-add-lesson">Valider l'exercice</button>
            </div>

        </form>
      </div>
    )
  }
  
export default AddExercice