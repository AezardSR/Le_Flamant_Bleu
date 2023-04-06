import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Link } from 'react-router-dom';
import '../css/Lesson.css';
import "../css/card.css";

function Module(props) {

    const [modules, setModules] = useState([]);
  
    const getModules = () => {
      fetch(`${process.env.REACT_APP_API_PATH}/modules`)
      .then(response => response.json())
      .then(json =>setModules(json))
      .catch(error => {console.error("Erreur Categories " + error) })
    }
    useEffect(() => {
      getModules();
    },[])
  
  const goToCategories = (id) =>{
    props.onToggle(id);
    console.log({id})

  }
  
    return (
           <div className="lessonContainer">
            {modules.map(item=>(
              <Card key={item.id} title={item.name} button={() => goToCategories(item.id)} />
            ))}
          </div>
    )
  }
  export default Module