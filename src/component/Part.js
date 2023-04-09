import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Link } from 'react-router-dom';
import Module from "./Module";
import '../css/Lesson.css';
import "../css/card.css";

function Part(props) {
    const [parts, setParts] = useState([]);
    const [filteredParts, setFilteredParts] = useState([]);
    const idCategorie = parseInt(props.categorieId);

    const getParts = () => {
      fetch(`${process.env.REACT_APP_API_PATH}/parts`)
        .then(response => response.json())
        .then(json => setParts(json))
        .catch(error => {console.error("Erreur Parts " + error)})
    }

    useEffect(() => {
      getParts();
    }, [])

    const goToLessons = (id) =>{
      props.onToggle(id)
      console.log({id})
    }
  useEffect(() =>{
    const filteredParts = parts.filter((item) => item.categories_id === idCategorie);
      setFilteredParts(filteredParts);
  }, [idCategorie, parts])

    return (
      <div className="lessonContainer">
        {filteredParts.map(item => (
          <Card key={item.id} title={item.name} button={() => goToLessons(item.id)} />
        ))}
      </div>
    )
  }
  
  export default Part;