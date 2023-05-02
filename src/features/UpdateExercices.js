import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
//ApiContext permet de faire des appels depuis une API externe
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateExercices = () => {

  //On récupère l'id de l'exercice sélectionné par l'url
  const { exercicesID } = useParams();

  //On définit requestAPI pour réaliser des appels d'API depuis ApiContext
  const {requestAPI} = useContext(ApiContext);

  //On définit les constantes exercices pour le update avec les données demandées
  const [exercice, setExercice] = useState({ name: '', content: '', image: '', file: '', parts_id: '' });
  //On définir parts pour récupère la parts à modifier et celles dans la BDD
  const [parts, setParts] = useState([]);

  //On récupère l'exercice par son ID pour récupérer ses données dans la BDD
  useEffect(() => {
    requestAPI('/exercices/' + exercicesID, 'GET',null)
      .then(response => response.json())
      .then(data => setExercice(data));

    //On récupère les parties pour récupérer ses données dans la BDD
    requestAPI('/parts', 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data));
  }, [exercicesID]);

  //Permet de mettre à jour dynamiquement l'exercice
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //Récupère les données de exercice et les écrase si de nouvelles sont insérées
    setExercice(prevExercice => ({ ...prevExercice, [name]: value }));
  };

  //On créer la constante pour l'évènement
  const handleSubmit = (event) => {
    event.preventDefault();
    //On créer l'évènement avec son url par id, sa méthode et son body contenant de base les valeurs actuelles
    requestAPI('/exercices/' + exercicesID, 'PATCH', exercice)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier un exercice</h1>
      {/* On créer le form contenant la constante de l'évènement dynamique au submit du formulaire */}
      <form className="flex align-center justify-center form-add-element" onSubmit={handleSubmit}>
        <div className="flex-column w-500px mar-left-10px">
          <div className="mar-vertical-10px">
            {/* Changement du nom de l'exercice */}
            <label htmlFor="name">Nom :</label>
            {/* Le input contient la méthode onChange avec la constante pour écraser les données de l'exercice pour le name */}
            <input type="text" id="name" name="name" value={exercice.name} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            {/* Changement du content de l'exercice */}
            <label htmlFor="content">Contenu :</label>
            {/* Le textarea contient la méthode onChange avec la constante pour écraser les données de l'exercice content */}
            <textarea id="content" name="content" value={exercice.content} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            {/* Changement de la partie de l'exercice */}
            <label htmlFor="parts_id">Partie :</label>
            {/* Le select contient la méthode onChange avec la constante pour écraser les données de l'exercice pour la part */}
            <select id="parts_id" name="parts_id" value={exercice.parts_id} onChange={handleInputChange}>
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

export default UpdateExercices;
