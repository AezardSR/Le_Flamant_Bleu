import React, { Component, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';

function GestionExercice() {

    const [exercices, setExercices] = useState([]);

    useEffect(() => {
          fetch('http://localhost:8000/api/exercices')
          .then(response => response.json())
          .then(data => setExercices(data))
    }, [])

    function deleteID(id) {
      fetch('http://localhost:8000/api/exercices/' + id, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div className='flex-wrap'>
            {exercices.map((exercice) => (
                <div className='block-categories-parts flex-between' id={exercice.id} key={exercice.id} value={exercice.id}>
                    <p>{exercice.name}</p>
                    <div className='flex'>
                      <button className='button-delete pointer' onClick={() => deleteID(exercice.id)}>Delete</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-exercice/" + exercice.id}>Update</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <Link to="/ajouter-exercice"><button className="link-lesson-add mar-vertical-10px pointer">Ajouter un exercice</button></Link>
      </div>
    )
}

export default GestionExercice;