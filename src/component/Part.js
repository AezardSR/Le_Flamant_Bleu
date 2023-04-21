import React, { useEffect, useState, useContext } from "react";
import Card from "../component/Card";
import "../css/styles.css";
import { ApiContext } from "../features/APIToken/ApiContext";

function Part(props) {

    const {requestAPI} = useContext(ApiContext);
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
      requestAPI('/parts', 'GET',null)
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
        <h2 className="title-lessons">Choix de la partie</h2>
        <div className="containerLoading">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
    return (
      <div className="lessonContainer">
        <h2 className="title-lessons">Choix de la partie</h2>
        {
        filteredParts.length > 0 ? (
          filteredParts.map(item => (
            <Card key={item.id} title={item.name} button={() => goToLessons(item.id)} />
        ))
        ) : (
          <div className="title-nodata">Pas de partie disponible</div>
        )
      }
        <div className="button-container">
          <button className="btn-return" onClick={handleReturnToCategorie}>Retour</button>
        </div>
      </div>
    )
  }
  
  export default Part;