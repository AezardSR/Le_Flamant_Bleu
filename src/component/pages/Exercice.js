import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../../css/Lesson.css';

function Exercice() {
    const [categories, setCategories] = useState([]);
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
      Promise.all([
        fetch('http://localhost:8000/api/categories'),
        fetch('http://localhost:8000/api/exercice'),
      ])
        .then(([resCategories, resExercices]) =>
          Promise.all([resCategories.json(), resExercices.json()])  
        )
        .then(([dataCategories, dataExercices]) => {
          setCategories(dataCategories);
          setExercices(dataExercices);
        })
    })

    return (
      <div>
          <h2>Exercices [nom de la formation]</h2>
          <div className="listing-lesson">
              <ul className="listing-categorie-nav">
                  {categories.map((categorie) => (
                    <li key={categorie.id}>
                      <div className="flex-between p-10px align-center">
                        {categorie.categorie}
                      <span>V</span>
                      </div>
                      <ul className="listing-categorie-nav">
                        {exercices.map((exercice)  => {
                          if(exercice.categorie_id !== categorie.id) {
                            return;
                          }
                          return (
                            <li key={exercice.id}>
                              <div className="flex-between p-10px align-center">
                                <a href="/" target="_blank">
                                  <p>{exercice.name}</p>
                                </a>
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                    </li>
                  ))}
              </ul>
          </div>

         <Link to="/ajouter_exercice"><button className="link-lesson-add mar-bottom-10px">Ajouter un exercice</button></Link>
      </div>
    )
  }
export default Exercice