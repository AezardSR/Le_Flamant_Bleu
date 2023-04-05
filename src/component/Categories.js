import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Link } from 'react-router-dom';
import Module from "./Module";
import '../css/Lesson.css';
import "../css/card.css";

function Categorie(props) {
    const [categories, setCategories] = useState([]);
    const [idCatModul, setIdCatModul] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const idModule = props.moduleId;
  
    const getCategories = () => {
      fetch('http://localhost:8000/api/categories')
        .then(response => response.json())
        .then(json => setCategories(json))
        .catch(error => {console.error("Erreur Categories " + error)})
    }
//   console.log("props " + props.moduleId)
    // const filterCategoriesByModuleId = () => {
    //   const filteredCats = idCatModul.filter(item => item.module_id === idModule);
    //   const filteredCatsIds = filteredCats.map(item => item.category_id);
    //   const filteredCategories = categories.filter(item => filteredCatsIds.includes(item.id));
    //   setFilteredCategories(filteredCategories);
    // }
  
    const getIdCatModul = () => {
      fetch('http://localhost:8000/api/module-categories')
        .then(response => response.json())
        .then(json => setIdCatModul(json))
        .catch(error => {console.error("Erreur idcat " + error)})
    }
  
    useEffect(() => {
      getCategories();
      getIdCatModul();
    }, [])
  useEffect(() =>{
    const filteredCats = idCatModul.filter((item) => item.module_id === idModule);
      const filteredCatsIds = filteredCats.map((item) => item.categories_id);
      const filteredCategories = categories.filter((category) => filteredCatsIds.includes(category.id));
      setFilteredCategories(filteredCategories);
  }, [idCatModul, idModule, categories])
    // useEffect(() => {
    //   if (props.moduleId) {
    //     filterCategoriesByModuleId(props.moduleId);
    //   } else {
    //     setFilteredCategories(categories);
    //   }
    // }, [props.moduleId])
  console.log(filteredCategories);
    return (
      <div className="lessonContainer">
        {filteredCategories.map(item => (
          <Card key={item.id} title={item.categorie} />
        ))}
      </div>
    )
  }
  
  export default Categorie;
  