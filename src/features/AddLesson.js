import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

const AddLesson = () => {

  const {requestAPI} = useContext(ApiContext);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [duration, setDuration] = useState([]);
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    requestAPI('/categories', 'GET',null)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = (event) => {
    requestAPI('/lessons', 'POST', {name: title, content: description, duration: duration, categorie_id: categoryID})
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

    return (
      <div>
        <form className="form-add-lesson">

            <div className='form-add-lesson-add-title'>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} className="form-add-lesson-title" placeholder="Insérer titre"></input>
            </div>

            <div className='form-add-lesson-add-details'>
                <div className='form-add-lesson-select-categorie'>
                  <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setCategoryID(event.target.value)}} value={categoryID}>
                    {categories.map((categorie) => (
                      <option key={categorie.id} value={categorie.id}>{categorie.id} : {categorie.categorie}</option>
                    ))}
                  </select>
                  <input value={duration} onChange={(event) => {setDuration(event.target.value)}} className="form-add-lesson-duration" placeholder="Temps à passer"></input><label>heure(s)</label>
                </div>
            </div>

            <div className='form-add-lesson-add-description'>
                <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} className="form-add-lesson-description" placeholder="Description du cours"></textarea>
                <Link to="/cours"><button onClick={handleSubmit} type="submit" className="btn btn-form-add-lesson">Valider le cours</button></Link>
            </div>

        </form>
      </div>
    )
  }
  
export default AddLesson