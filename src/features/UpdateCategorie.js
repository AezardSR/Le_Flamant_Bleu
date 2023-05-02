import React, { useEffect, useState, useContext } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";
import { useParams } from 'react-router-dom';

const UpdateCategorie = () => {
  const { categoryID } = useParams();

  const {requestAPI} = useContext(ApiContext);
  const [category, setCategory] = useState({});
  const [modules, setModules] = useState([]);
  const [modulesID, setModulesID] = useState("");
  const [createdCategoryId, setCreatedCategoryId] = useState(null);

  useEffect(() => {
    requestAPI(`/categories/${categoryID}`, 'GET',null)
      .then(response => response.json())
      .then(data => setCategory(data));

    requestAPI('/modules', 'GET', null)
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.log(error))

  }, [categoryID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI(`/categories/${categoryID}`, 'PATCH', {categorie: category.categorie})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCreatedCategoryId(data.id);

        // requestAPI(`/module-categories/${categoryID}`, 'PATCH', { categories_id: data.id, modules_id: modulesID })
        //   .then(response => response.json())
        //   .then(data => console.log(data))
    })
  }

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une catégorie</h1>
      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="flex-column w-500px mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="categorie">Nom à modifier :</label>
            <input type="text" id="name" name="categorie" value={category.categorie} onChange={handleInputChange} />

            {/* <label>Module à modifier</label>
            <select className="p-5px w-100 h-45px" style={{ marginBottom: '20px', fontSize: 'Medium' }} onChange={(event) => { setModulesID(event.target.value) }} value={modulesID}>
              {modules.map((module) => (
                <option key={module.id} value={module.id}>{module.id} : {module.name}</option>
              ))}
            </select> */}
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type="submit">Modifier la catégorie</button>
      </form>
    </div>
  );
};

export default UpdateCategorie;
