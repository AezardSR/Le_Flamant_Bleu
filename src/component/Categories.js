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
    const idModule = parseInt(props.moduleId);

    const getCategories = () => {
      fetch(`${process.env.REACT_APP_API_PATH}/categories`)
        .then(response => response.json())
        .then(json => setCategories(json))
        .catch(error => {console.error("Erreur Categories " + error)})
    }

    const getIdCatModul = () => {
      fetch(`${process.env.REACT_APP_API_PATH}/module-categories`)
        .then(response => response.json())
        .then(json => setIdCatModul(json))
        .catch(error => {console.error("Erreur idcat " + error)})
    }
  
    useEffect(() => {
      getCategories();
      getIdCatModul();
    }, [])

    const goToParts = (id) =>{
      props.onToggle(id)
      console.log({id})
    }
  useEffect(() =>{
    const filteredCats = idCatModul.filter((item) => item.modules_id === idModule);
      const filteredCatsIds = filteredCats.map((item) => item.categories_id);
      const filteredCategories = categories.filter((category) => filteredCatsIds.includes(category.id));
      setFilteredCategories(filteredCategories);
  }, [idCatModul, idModule, categories])

    return (
      <div className="lessonContainer">
        {filteredCategories.map(item => (
          <Card key={item.id} title={item.categorie} button={() => goToParts(item.id)} />
        ))}
      </div>
    )
  }
  
  export default Categorie;
  