import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import '../css/Lesson.css';
import "../css/card.css";

function CardLesson(props) {

    const [loading, setLoading] = useState(false);
    const [lessons, setLessons] = useState([]);
    const [filteredLessons, setFilteredLessons] = useState([]);
    const idPart = parseInt(props.partId);

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

    // const goToLessons = (id) =>{
    //   props.onToggle(id)
    //   console.log({id})
    // }
  useEffect(() =>{
    const filteredLessons = lessons.filter((item) => item.parts_id === idPart);
      setFilteredLessons(filteredLessons);
  }, [idPart, lessons])

  if(loading){
    return(
      <div className="containerLoading">
        <div className="loading">Loading</div>
        <div className="spinner"></div>
      </div>
    )
  }
    return (
      <div className="lessonContainer">
        {
          filteredLessons.length > 0 ? (
            filteredLessons.map(item => (
              <Card key={item.id} title={item.name} />
            ))
          ) : (
            <div> pas de lessons</div>
          )
        }
        
      </div>
    )
  }
  
  export default CardLesson;