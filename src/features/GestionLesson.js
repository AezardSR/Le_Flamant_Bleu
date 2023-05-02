import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';
//ApiContext permet de faire des appels depuis une API externe
import { ApiContext } from "../features/APIToken/ApiContext";

function GestionLesson() {

    //On définit requestAPI pour réaliser des appels d'API depuis ApiContext
    const {requestAPI} = useContext(ApiContext);
    //On définit une constante pour les lessons
    const [lessons, setLessons] = useState([]);

    //On récupère les lessons et on les place dans la constante lessons
    useEffect(() => {
        requestAPI('/lessons', 'GET',null)
          .then(response => response.json())
          .then(data => setLessons(data))
    }, [])

    //On créer une fonction pour l'action DELETE pour l'insérer dans un bouton
    function deleteID(id) {
      //Appel api avec son url par l'id sélectionné + la méthode + le body a null
      requestAPI('/lessons/' + id, 'DELETE', null)
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
                      {/* On place la fonction deleteID dans le bouton et activé s'il y a un clic par le onClick */}
                      <button className='button-delete pointer' onClick={() => deleteID(lesson.id)}>Effacer</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-cours/" + lesson.id}>Modifier</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <Link to="/ajouter-cours"><button className="link-lesson-add mar-vertical-10px pointer">Ajouter une leçon</button></Link>
      </div>
    )
}

export default GestionLesson;