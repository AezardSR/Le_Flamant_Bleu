import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

const AddLesson = () => {

  const {requestAPI} = useContext(ApiContext);

  //Définir les constantes pour l'ajout d'une Leçon
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [duration, setDuration] = useState([]);
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);

  //On récupère les parties existantes dans la BDD
  useEffect(() => {
    requestAPI('/parts', 'GET',null)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  //Création de la constante contenant l'évènement de l'ajout
  const handleSubmit = (event) => {
    //Action POST avec l'url, la méthode et le body contenant les données de la tables classes
    requestAPI('/lessons', 'POST', {name: title, content: description, duration: duration, parts_id: categoryID})
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

    return (
      <div>
        <h1 className="mar-vertical-10px mar-left-10px">Ajouter une leçon</h1>
        <form className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px">

              <div className="mar-vertical-10px">
                {/* Ajout du titre de la leçon */}
                <label>Titre de la leçon</label>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
              </div>

              <div className="mar-vertical-10px">
                {/* Ajout de la durée de la leçon en heures */}
                <label>Durée de la leçon (en heures)</label>
                <input value={duration} onChange={(event) => {setDuration(event.target.value)}}></input>
              </div>
          
              <div className="mar-vertical-10px">
                {/* Ajout de la partie de la leçon */}
                <label>Partie de la leçon</label>
                <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setCategoryID(event.target.value)}} value={categoryID}>
                  {categories.map((categorie) => (
                    <option key={categorie.id} value={categorie.id}>{categorie.id} : {categorie.name}</option>
                  ))}
                </select>
              </div>

              <label>Cours :</label>
              <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} className="form-add-lesson-description" placeholder="Description du cours"></textarea>
              <Link to="/cours"><button onClick={handleSubmit} type="submit" className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer">Valider le cours</button></Link>
          </div>
        </form>
      </div>
    )
  }
  
export default AddLesson