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
                      {categorie.categorie}
                    </li>
                  ))}
              </ul>

              <ul className="listing-categorie-nav">
                {exercices.map((exercices) => (
                  <li key={exercices.id}>
                    {exercices.name}
                  </li>
                ))}
              </ul>
              
          </div>

         <Link to="/ajouter_exercice"><button className="link-lesson-add">Ajouter un exercice</button></Link>
      </div>
    )
  }
export default Exercice