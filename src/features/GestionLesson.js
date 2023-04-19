import React, { Component, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';

function GestionLesson() {

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
          fetch('http://localhost:8000/api/lessons')
          .then(response => response.json())
          .then(data => setLessons(data))
    }, [])

    function deleteID(id) {
      fetch('http://localhost:8000/api/lessons/' + id, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div className='flex-wrap'>
            {lessons.map((lesson) => (
                <div className='block-categories-parts flex-between' id={lesson.id} key={lesson.id} value={lesson.id}>
                    <p>{lesson.name}</p>
                    <div className='flex'>
                      <button className='button-delete pointer' onClick={() => deleteID(lesson.id)}>Delete</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-categorie/" + lesson.id}>Update</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <Link to="/ajouter-cours"><button className="link-lesson-add mar-vertical-10px pointer">Ajouter une leçon</button></Link>
      </div>
    )
}

export default GestionLesson;