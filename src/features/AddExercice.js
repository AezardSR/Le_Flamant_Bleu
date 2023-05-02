import React, { useEffect, useState, useContext } from "react";
import { getByTitle } from "@testing-library/react";
import { Link } from 'react-router-dom'
import '../css/styles.css';
import { ApiContext } from '../features/APIToken/ApiContext';

const AddExercice = () => {

  //Définir les constantes pour l'ajout d'un Exercice
  //Les constantes image et file seront disponibles pour la V2 de l'application
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState([]);
  const [file, setFile] = useState([]);
  const [partsID, setPartsID] = useState('');
  const [parts, setParts] = useState([]);  
  const {requestAPI} = useContext(ApiContext);

  //On récupère les parties existantes dans la BDD
  useEffect(() => {
    requestAPI('/parts', 'GET', null)
      .then(response => response.json())
      .then(data => setParts(data))
      .catch(error => console.log(error))
  }, [])

  //Création de la constante contenant l'évènement de l'ajout
  const handleSubmit = (event) => {
    event.preventDefault();
    //Action POST avec l'url, la méthode et le body contenant les données de la tables exercices
    requestAPI('/exercices', 'POST', {name: title, content: description, image: " ", file: " ", parts_id: partsID})
        .then(response => response.json())
        .then(data => console.log(data))
  }

    return (
      <div>
        <h1 className="mar-vertical-10px mar-left-10px">Ajouter un exercice</h1>
        <form className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px">
            <div className="mar-vertical-10px">
                {/* Ajout du titre de l'exercice */}
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} className="form-add-lesson-title" placeholder="Insérer titre"></input>
            </div>
            <div className="mar-vertical-10px">
              {/* Ajout de la partie de l'exercice */}
              <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setPartsID(event.target.value)}} value={partsID}>
                <option value="">--Choisir une option--</option>
                {parts.map((part) => (
                  <option key={part.id} value={part.id}>{part.id} : {part.name}</option>
                ))}
              </select>
            </div>
            <div className="mar-vertical-10px">
                {/* Ajout du contenu / description de l'exercice */}
                <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} className="form-add-lesson-description" placeholder="Description du cours"></textarea>
            </div>
                <button onClick={handleSubmit} type="submit" className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer">Valider l'exercice</button>
          </div>


        </form>
      </div>
    )
  }
  
export default AddExercice