import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../css/Lesson.css';

export default class Exercice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      exercices: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/exercice")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            exercices: result.exercices
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
    const {exercices, categories} = this.state;
    return (
      <div>
          <h2>Exercices [nom de la formation]</h2>
          <div className="listing-lesson">
              <ul className="listing-categorie-nav">
                  {categories.map(categorie => (
                    <li key={categorie.id} className="listing-name-categorie">
                      {categorie.categorie}
                      <span style={{fontWeight: 100}}>V</span>
                          <ul>
                          {exercices.map(exercice => (
                            <li key={exercice.id}>
                                {exercice.name}
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
