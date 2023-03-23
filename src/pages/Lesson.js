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

  function deleteLesson(id) {
    fetch('http://localhost:8000/api/lessons/' + id, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <div>
        <div className="listing-lesson">
            <ul className="listing-categorie-nav">
                {lessons.map((cours) => (
                  <li key={cours.id}>
                      <div className="p-10px">
                        <Link to={"/see-lessons/" + cours.id}>
                          <p>{cours.id} : {cours.name}</p>
                          <p>{cours.content}</p>
                          <button className='btn-delete' onClick={() => deleteLesson(cours.id)}>Delete</button>
                          <button type="submit" className='btn-update'><Link to={"/update-lessons/" + cours.id}>Update</Link></button>
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

       <Link to="/ajouter-cours"><button className="link-lesson-add mar-bottom-10px">Ajouter un cours</button></Link>
    </div>
  )
}
export default Lesson