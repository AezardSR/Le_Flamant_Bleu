import React, { useEffect, useState, useContext } from "react";
import Card from "../component/Card";
import "../css/styles.css";
import { ApiContext } from "../features/APIToken/ApiContext";

function Categorie(props) {

    const {requestAPI} = useContext(ApiContext);
    const [loading, setLoading] = useState(false); // permet l'affichage ou non du loading
    const [categories, setCategories] = useState([]); // categories est un tableau vide jusqu'au moment ou il reçoit les données du useEffect
    const [idCatModul, setIdCatModul] = useState([]); // idCatModul est un tableau vide jusqu'au moment ou il reçoit les données du useEffect
    const [filteredCategories, setFilteredCategories] = useState([]); // filtre les categories dans un tableau vide jusqu'au moment ou on  a les données
    const idModule = parseInt(props.moduleId); // variable qui recupere l'id du composant Module
    const {returnToModule} = props; // props qui permet de retourner sur le composant Module

    // fonction qui permet de retourner sur le composant Module
    const handleReturnToModule = () => {
      returnToModule();
    }

    // fonction pour recuperer les données de l'API
    const getCategories = () => {
      setLoading(true)
      requestAPI('/categories', 'GET',null)
        .then(response => response.json())
        .then(json => {
          setCategories(json);
          setLoading(false);
          })
        .catch(error => {console.error("Erreur Categories " + error)})
    }

    // fonction pour recuperer les données de l'API
    const getIdCatModul = () => {
      requestAPI('/module-categories', 'GET',null)
        .then(response => response.json())
        .then(json => setIdCatModul(json))
        .catch(error => {console.error("Erreur idcat " + error)})
    }
  
    // appel des fonctions pour la recup des données, tableau vide a la fin pour etre sur qu'il se monte qu'une fois
    useEffect(() => {
      getCategories();
      getIdCatModul();
    }, [])

    // recuperation de l'id quand on clique sur le composant Card
    const goToParts = (id) =>{
      props.onToggle(id)
    }

  useEffect(() =>{
    const filteredCats = idCatModul.filter((item) => item.modules_id === idModule);
      const filteredCatsIds = filteredCats.map((item) => item.categories_id);
      const filteredCategories = categories.filter((category) => filteredCatsIds.includes(category.id));
      setFilteredCategories(filteredCategories);
  }, [idCatModul, idModule, categories])


  if(loading){
    return(
      <div>
        <h2 className="title-lessons">Choix de la categorie</h2>
        <div className="containerLoading">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
    return(
      <div className="lessonContainer">
        <h2 className="title-lessons">Choix de la categorie</h2>
        {filteredCategories.map(item => (
          <Card key={item.id} title={item.categorie} button={() => goToParts(item.id)} />
        ))}
        <div className="button-container">
          <button className="btn-return" onClick={handleReturnToModule}>Retour</button>
        </div>
        
      </div>
    )
  }
  
  export default Categorie;
  