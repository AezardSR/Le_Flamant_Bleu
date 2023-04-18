import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import '../css/Lesson.css';
import "../css/card.css";
import Modal from "./Modal";

function CardLesson(props) {

    const [loading, setLoading] = useState(false);
    const [lessons, setLessons] = useState([]);
    const [filteredLessons, setFilteredLessons] = useState([]);
    const idPart = parseInt(props.partId);
    const [showModal, setShowModal] = useState(false); // new state for modal
    const [selectedItem, setSelectedItem] = useState(null); // permet de recuperer les données pour la modal
    const { returnToPart } = props;


    const handleReturnToPart = () => {
      returnToPart();
    };
    const getLessons = () => {
      setLoading(true)
      fetch(`${process.env.REACT_APP_API_PATH}/lessons`)
        .then(response => response.json())
        .then(json => {
          setLessons(json);
          setLoading(false);
          })
        .catch(error => {console.error("Erreur Lessons " + error)})
    }

    useEffect(() => {
      getLessons();
    }, [])

  useEffect(() =>{
    const filteredLessons = lessons.filter((item) => item.parts_id === idPart);
      setFilteredLessons(filteredLessons);
  }, [idPart, lessons])

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
      <h2 className="title-lessons">Choix du cours</h2>
      <div className="containerLoading">
        <div className="spinner"></div>
      </div>
      </>
    )
  }
    return (
      <div className="lessonContainer">
      <h2 className="title-lessons">Choix du cours</h2>
        {
          filteredLessons.length > 0 ? (
            filteredLessons.map(item => (
              <Card key={item.id} title={item.name} button={() => openModal(item)} />
            ))
          ) : (
                <div className="title-nodata">Pas de cours disponible</div>
          )
        }
        {/* Render Modal component if showModal state is true */}
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
  
  export default CardLesson;