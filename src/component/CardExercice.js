import React, { useEffect, useState, useContext } from "react";
import Card from "../component/Card";
import "../css/styles.css";
import Modal from "./Modal";
import { ApiContext } from "../features/APIToken/ApiContext";


function CardExercice(props) {

    const {requestAPI} = useContext(ApiContext);
    const [loading, setLoading] = useState(false);
    const [exercices, setExercices] = useState([]);
    const [filteredExercices, setFilteredExercices] = useState([]);
    const idPart = parseInt(props.partId);
    const [showModal, setShowModal] = useState(false); // new state for modal
    const [selectedItem, setSelectedItem] = useState(null); // permet de recuperer les données pour la modal
    const { returnToPart } = props;

    const handleReturnToPart = () => {
      returnToPart();
    };
    const getExercices = () => {
      setLoading(true)
      requestAPI('/exercices', 'GET',null)
        .then(response => response.json())
        .then(json => {
          setExercices(json);
          setLoading(false);
          })
        .catch(error => {console.error("Erreur Exercices " + error)})
    }

    useEffect(() => {
      getExercices();
    }, [])

  useEffect(() =>{
    const filteredExercices = exercices.filter((item) => item.parts_id === idPart);
      setFilteredExercices(filteredExercices);
  }, [idPart, exercices])

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true); // set showModal state to true when button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // set showModal state to false when modal is closed
  };
  if(showModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if(loading){
    return(
      <>
      <h2 className="title-lessons">Choix de l'exercice</h2>
      <div className="containerLoading">
        <div className="spinner"></div>
      </div>
      </>
    )
  }
    return (
      <div className="lessonContainer">
        <h2 className="title-lessons">Choix de l'exercice</h2>
        {
          filteredExercices.length > 0 ? (
            filteredExercices.map(item => (
              <Card key={item.id} title={item.name} button={() => openModal(item)} />
            ))
          ) : (
              <div className="title-nodata"> pas d'exercice(s) disponible</div>
          )
        }
        {showModal && <Modal
                    key={selectedItem.id}
                    item={selectedItem} 
                    title={selectedItem.name}
                    button={closeModal}
                    content={selectedItem.content}       
      />}
        <div className="button-container">
          <button className="btn-return" onClick={handleReturnToPart}>Retour</button>
        </div>
      </div>
    )
  }
  
  export default CardExercice;