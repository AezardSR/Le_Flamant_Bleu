import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateLesson = () => {

  //On récupère l'id de la leçon sélectionnée par l'url
  const { lessonsID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  //On définit les constantes lesson pour le update avec les données demandées
  const [lesson, setLesson] = useState({ name: '', content: '', duration: '', parts_id: '' });

  //On définir parts pour récupère la parts à modifier et celles dans la BDD
  const [parts, setParts] = useState([]);

  //On récupère les leçons par son ID pour récupérer ses données dans la BDD
  useEffect(() => {
    requestAPI('/lessons/' + lessonsID, 'GET',null)
      .then(response => response.json())
      .then(data => setLesson(data));

    //On récupère les parties pour récupérer ses données dans la BDD
    requestAPI('/parts', 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data));
  }, [lessonsID]);

  //Permet de mettre à jour dynamiquement la leçon
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //Récupère les données de lesson et les écrase si de nouvelles sont insérées
    setLesson(prevLesson => ({ ...prevLesson, [name]: value }));
  };

  //On créer la constante pour l'évènement
  const handleSubmit = (event) => {
    event.preventDefault();
    //On créer l'évènement avec son url par id, sa méthode et son body contenant de base les valeurs actuelles
    requestAPI('/lessons/' + lessonsID, 'PATCH', lesson)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une leçon</h1>
      {/* On créer le form contenant la constante de l'évènement dynamique au submit du formulaire */}
      <form className="flex align-center justify-center form-add-element" onSubmit={handleSubmit}>
        <div className="flex-column w-500px mar-left-10px">
          <div className="mar-vertical-10px">
            {/* Changement du nom de la leçon */}
            <label htmlFor="name">Nom :</label>
            {/* Le input contient la méthode onChange avec la constante pour écraser les données de la lesson pour le name */}
            <input type="text" id="name" name="name" value={lesson.name} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            {/* Changement du content de la leçon */}
            <label htmlFor="content">Contenu :</label>
            {/* Le textarea contient la méthode onChange avec la constante pour écraser les données de la lesson description */}
            <textarea id="content" name="content" value={lesson.content} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            {/* Changement de duration de la leçon */}
            <label htmlFor="duration">Durée :</label>
            {/* Le input contient la méthode onChange avec la constante pour écraser les données de la lesson pour la duration */}
            <input type="text" id="duration" name="duration" value={lesson.duration} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            {/* Changement de la part de la leçon */}
            <label htmlFor="parts_id">Partie :</label>
            {/* Le select contient la méthode onChange avec la constante pour écraser les données de la lesson pour la part */}
            <select id="parts_id" name="parts_id" value={lesson.parts_id} onChange={handleInputChange}>
              {parts.map(part => (
                <option key={part.id} value={part.id}>{part.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer">Modifier la leçon</button>
      </form>
    </div>
  );
};

export default UpdateLesson;
