import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import '../css/Lesson.css';
import "../css/card.css";

function CardLesson(props) {
    const [lessons, setLessons] = useState([]);
    const [filteredLessons, setFilteredLessons] = useState([]);
    const idPart = parseInt(props.partId);

    const getLessons = () => {
      fetch(`${process.env.REACT_APP_API_PATH}/lessons`)
        .then(response => response.json())
        .then(json => setLessons(json))
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

    return (
      <div className="lessonContainer">
        {filteredLessons.map(item => (
          <Card key={item.id} title={item.name} />
        ))}
      </div>
    )
  }
  
  export default CardLesson;