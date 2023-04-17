import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Link } from 'react-router-dom';
import Module from "./Module";
import '../css/Lesson.css';
import "../css/card.css";

function Part(props) {

    const [loading, setLoading] = useState(false);
    const [parts, setParts] = useState([]);
    const [filteredParts, setFilteredParts] = useState([]);
    const idCategorie = parseInt(props.categorieId);
    const { returnToCategorie } = props;


    const handleReturnToCategorie = () => {
      returnToCategorie();
    };
    const getParts = () => {
      setLoading(true)
      fetch(`${process.env.REACT_APP_API_PATH}/parts`)
        .then(response => response.json())
        .then(json => {
          setParts(json);
          setLoading(false);
          })
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

  if(loading){
    return(
      <div>
        <h2 className="title-lessons">Choix de la partie du cours</h2>
        <div className="containerLoading">
          <div className="loading">Loading</div>
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
    return (
      <div className="lessonContainer">
        <h2 className="title-lessons">Choix de la partie du cours</h2>
        <button className="button" onClick={handleReturnToCategorie}>Retour</button>

        {filteredParts.map(item => (
          <Card key={item.id} title={item.name} button={() => goToLessons(item.id)} />
        ))}
      </div>
    )
  }
  
  export default Part;