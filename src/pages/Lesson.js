import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Lesson.css';

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
  }, [])

  return (
    <div>
        <h2>Cours [nom de la formation]</h2>
        <div className="listing-lesson">
            <ul className="listing-categorie-nav">
                {categories.map((categorie) => (
                  <li key={categorie.id}>
                    <div className="flex-between p-10px align-center">
                      {categorie.categorie}
                      <span>V</span>
                    </div>
                      <ul className="listing-categorie-nav">
                        {lessons.map((lesson)  => {
                          if(lesson.categorie_id !== categorie.id) {
                            return;
                          }
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
                        })}
                      </ul>
                  </li>
                ))}
            </ul>
        </div>

       <Link to="/ajouter-cours"><button className="link-lesson-add mar-bottom-10px">Ajouter un cours</button></Link>
    </div>
  )
}
export default Lesson