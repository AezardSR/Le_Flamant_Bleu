import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../css/Lesson.css';

export default class Exercice extends React.Component {
  state = {
    exercice: [],
    categorie: []
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
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
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
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
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
                  {
                    categories.map(categories => (
                        <li key={categories.id} className="listing-name-categorie">
                          {categories.categorie}
                          <span style={{fontWeight: 100}}>V</span>
                              <ul>
                              {exercices.map(exercices => (
                                <li key={exercices.id}>
                                    {exercices.name}
                                </li>
                              ))}
                              </ul>
                        </li>
                      ))
                  }
              </ul>
              
          </div>

         <Link to="/ajouter_exercice"><button className="link-lesson-add">Ajouter un exercice</button></Link>
      </div>
    )
  }
}
