import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateParts = () => {

  //On récupère l'id de la parts sélectionné par l'url
  const { partsID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  //On définit les constantes parts pour le update avec les données demandées
  const [parts, setParts] = useState({ name: '', categories_id: '' });

  //On définir categoriesID pour récupère la catégorie à modifier et celles dans la BDD
  const [categoriesID, setCategoriesID] = useState([]);

  //On récupère la partie par son ID pour récupérer ses données dans la BDD
  useEffect(() => {
    requestAPI('/parts/' + partsID, 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data));

    //On récupère toutes les catégories
    requestAPI('/categories', 'GET',null)
      .then(response => response.json())
      .then(data => setCategoriesID(data));
  }, [partsID]);

  //Permet de mettre à jour dynamiquement la partie
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //Récupère les données de parts et les écrase si de nouvelles sont insérées
    setParts(prevParts => ({ ...prevParts, [name]: value }));
  };

  //On créer la constante pour l'évènement
  const handleSubmit = (event) => {
    event.preventDefault();
    //On créer l'évènement avec son url par id, sa méthode et son body contenant de base les valeurs actuelles
    requestAPI('/parts/' + partsID, 'PATCH', {name: parts.name, categories_id: parts.categories_id})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une partie</h1>

      {/* On créer le form contenant la constante de l'évènement au submit du formulaire */}
      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            {/* Changement du nom de la partie */}
            <label className="label-form" htmlFor="name">Nom à modifier</label>
            {/* Le input contient la méthode onChange avec la constante pour écraser les données de la part */}
            <input type="text" id="name" name="name" value={parts.name} onChange={handleInputChange} />
          </div>
          <div className="flex-column w-500px mar-left-10px">
            {/* Changement de la catégorie */}
            <label className="label-form" htmlFor="categories_id">Catégorie à modifier</label>
            {/* Le select contient la méthode onChange avec la constante pour écraser les données de la part */}
            <select className="form-select" id="categories_id" name="categories_id" value={parts.categories_id} onChange={handleInputChange}>
              {categoriesID.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.categorie}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type='submit'>Modifier la partie</button>
      </form>
    </div>
  );
};

export default UpdateParts;
