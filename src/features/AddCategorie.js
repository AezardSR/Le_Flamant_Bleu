import React, { useContext, useState, useEffect } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";

const AddCategorie = () => {
  const { requestAPI } = useContext(ApiContext);
  const [category, setCategory] = useState("");
  const [modules, setModules] = useState([]);
  const [modulesID, setModulesID] = useState("");
  const [createdCategoryId, setCreatedCategoryId] = useState(null);

  useEffect(() => {
    requestAPI('/modules', 'GET', null)
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.log(error))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    requestAPI('/categories', 'POST', { categorie: category })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCreatedCategoryId(data.id);

        requestAPI('/module-categories', 'POST', { categories_id: data.id, modules_id: modulesID })
          .then(response => response.json())
          .then(data => console.log(data))
      })
  }

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Ajouter une catégorie</h1>
      <form className="flex-column form-add">
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form">Nom de la catégorie:</label>
            <input type="text" name="categorie" value={category} onChange={(event) => { setCategory(event.target.value) }} />

            <label>Choix du module</label>
            <select className="p-5px w-100 h-45px" style={{ marginBottom: '20px', fontSize: 'Medium' }} onChange={(event) => { setModulesID(event.target.value) }} value={modulesID}>
              <option value="">--Choisir une option--</option>
              {modules.map((module) => (
                <option key={module.id} value={module.id}>{module.id} : {module.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type="submit" onClick={handleSubmit}>Ajouter la catégorie</button>
      </form>
    </div>
  )
}

export default AddCategorie;
