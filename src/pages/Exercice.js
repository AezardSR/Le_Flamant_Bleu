import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Lesson.css';

function Exercice() {

  const [categories, setCategories] = useState([]);
  const [exercices, setExercices] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/categories'),
      fetch('http://localhost:8000/api/exercices'),
    ])
      .then(([resCategories, resExercices]) =>
        Promise.all([resCategories.json(), resExercices.json()])  
      )
      .then(([dataCategories, dataExercices]) => {
        setCategories(dataCategories);
        setExercices(dataExercices);
      })
  }, [])

  function deleteExercice(id) {
    fetch('http://localhost:8000/api/exercices/' + id, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <div>
        <div className="listing-lesson">
            <ul className="listing-categorie-nav">
                {exercices.map((exercice) => (
                  <li key={exercice.id}>
                    <div className="p-10px">
                      <Link to={"/see-exercices/" + exercice.id}>
                        <p>{exercice.id} : {exercice.name}</p>
                        <p>{exercice.content}</p>
                        <button className='btn-delete' onClick={() => deleteExercice(exercice.id)}>Delete</button>
                        <button type="submit" className='btn-update'><Link to={"/update-exercice/" + exercice.id}>Update</Link></button>
                        {/* {categorie.categorie}
                        <span>V</span> */}
                      </Link>
                    </div>
                      {/* <ul className="listing-categorie-nav">
                        {lessons.map((lesson)  => {
                          if(lesson.categorie_id == categorie.id) {
                            return (
                              <li key={lesson.id}>
                                <div className="flex-between p-10px align-center">
                                  <a href="/" target="_blank">
                                    <p>{lesson.name}</p>
                                    <p>{lesson.content}</p>
                                  </a>
                                </div>
                              </li>
                            );
                          }
                        })}
                      </ul> */}
                  </li>
                ))}
            </ul>
        </div>

       <Link to="/ajouter-exercice"><button className="link-lesson-add mar-bottom-10px">Ajouter un exercice</button></Link>
    </div>
  )
}
export default Exercice