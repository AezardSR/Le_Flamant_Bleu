import React, { useEffect, useState, useContext } from "react";
import Card from "../component/Card";
import "../css/styles.css";
import { ApiContext } from "../features/APIToken/ApiContext";

function Module(props) {

    const {requestAPI} = useContext(ApiContext);
    const [modules, setModules] = useState([]); // modules est un tableau vide jusqu'au moment ou il reçoit les données du useEffect
    const [loading, setLoading] = useState(false); // permet l'affichage ou non du loading
  
    // recuperation des données au format JSON quand la reponse est ok
    // on met le loading a false une fois les données recuperé
    const getModules = () => {
      setLoading(true)
      requestAPI('/modules', 'GET',null)
      .then(response => response.json())
      .then(json => {
         setModules(json);
         setLoading(false);
        })
      .catch(error => {console.error("Erreur Categories " + error) })
    }

    // appel de la fonction pour la recup des données, tableau vide a la fin pour etre sur qu'il se monte qu'une fois
    useEffect(() => {
      getModules();
    },[])
  
  //  fonction qui recupere l'id sur la card sur laquelle on clique
  const goToCategories = (id) =>{
    props.onToggle(id);
  }

  // si loading est TRUE, il affiche pendant le chargement des données
  if(loading){
    return(
      <div>
        <h2 className="title-lessons">Choix du module</h2>
        <div className="containerLoading">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  // si le loading est false, on execute ce code
  // on fait un .map pour afficher toutes les lignes des données de "modules"
  // on utilise le composant Card et on utilise les props pour les afficher
    return (
          <div className="lessonContainer">
            <h2 className="title-lessons">Choix du module</h2>
            {modules.map(item=>(
              <Card key={item.id} title={item.name} button={() => goToCategories(item.id)} />
            ))}
          </div>
    )
  }
  export default Module