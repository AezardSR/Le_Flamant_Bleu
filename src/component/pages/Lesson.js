import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../../css/Lesson.css';

function Lesson() {

  const [categories, setCategories] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/categories'),
      fetch('http://localhost:8000/api/lessons'),
    ])
      .then(([resCategories, resLessons]) =>
        Promise.all([resCategories.json(), resLessons.json()])  
      )
      .then(([dataCategories, dataLessons]) => {
        setCategories(dataCategories);
        setLessons(dataLessons);
      })
  })

  return (
    <div>
        <h2>Cours [nom de la formation]</h2>
        <div className="listing-lesson">
            <ul className="listing-categorie-nav">
                {categories.map((categorie) => (
                  <li key={categorie.id}>
                    {categorie.categorie}
                  </li>
                ))}
            </ul>

            <ul className="listing-categorie-nav">
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  {lesson.name}
                </li>
              ))}
            </ul>
            
        </div>

       <Link to="/ajouter_cours"><button className="link-lesson-add">Ajouter un cours</button></Link>
    </div>
  )
}
export default Lesson