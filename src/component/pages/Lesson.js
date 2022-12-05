import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Lesson.css';

export default class Lesson extends React.Component {
  /* OpenCategory(category){
    let button = document.getElementById(category);
    button.classList.toggle('section-close');
    button.classList.toggle('section-open');
  } */

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      lessons: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/lessons")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            lessons: result.lessons
          });
        }
      )

    fetch("http://localhost:8000/api/categories")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          categories: result.categories
        });
      }
    )
  }

  render() {
    const {lessons, categories} = this.state;
    return (
      <div>
          <h2>Leçons [nom de la formation]</h2>
          <div className="listing-lesson">
              <ul className="listing-categorie-nav">
                  {categories.map(categorie => (
                    <li key={categorie.id} className="listing-name-categorie">
                      {categorie.categorie}
                      <span style={{fontWeight: 100}}>V</span>
                          <ul>
                          {lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.name}
                            </li>
                          ))}
                          </ul>
                    </li>
                  ))}
              </ul>
              
          </div>

         <Link to="/ajouter_exercice"><button className="link-lesson-add">Ajouter un exercice</button></Link>
      </div>
    )
  }
}
