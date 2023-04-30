import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";

const AddParts = () => {

  const {requestAPI} = useContext(ApiContext);

  //Définir la constante part pour la partie
  const [part, setPart] = useState([]);

  //Définir la constante categories pour les données des catégories et categoriesID pour l'id
  const [categories, setCategories] = useState([]);
  const [categoriesID, setCategoriesID] = useState([]);

  //Création de la constante handleSubmit pour l'évènement
  const handleSubmit = (event) => {
    //Action POST avec l'url, la méthode et le body contenant les données de la tables parts
    requestAPI('/parts', 'POST', {name: part, categories_id: categoriesID})
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

  //Récupère les catégories disponibles dans la BDD
  useEffect(() => {
    requestAPI('/categories', 'GET',null)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div>

      <h1 className="mar-vertical-10px mar-left-10px">Ajouter une partie</h1>
      
      <form className="flex-column form-add">
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            {/* Ajout d'un nom pour la partie */}
            <label className="label-form">Nom de la partie</label>
            <input type="text" name="categorie" value={part} onChange={(event) => {setPart(event.target.value)}} />
          </div>

          <div className="flex-column w-500px mar-left-10px">
            {/* Sélection de la catégorie qui sera liée à la partie */}
            <label className="label-form">Choix de la catégorie</label>
            <select className="form-select" value={categoriesID} onChange={e => setCategoriesID(e.target.value)}>
              <option value="">--Choisir une option--</option>
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>{categorie.categorie}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type="submit" onClick={handleSubmit}>Ajouter la partie</button>
      </form>
    </div>
  )
}

export default AddParts;