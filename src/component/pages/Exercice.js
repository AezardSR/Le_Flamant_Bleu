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
    axios.get('http://localhost:8000/api/exercice')
      .then(res => {
        const exercice = res.data;
        this.setState({ exercice });
      })

    axios.get('http://localhost:8000/api/categories')
      .then(res => {
        const categorie = res.data;
        this.setState({ categorie });
      })
  }

  render() {
    return (
      <div>
          <h2>Exercices [nom de la formation]</h2>
          <div className="listing-lesson">
              <ul className="listing-categorie-nav">
                  {
                    this.state.categorie
                      .map(categorie =>
                        <li className="listing-name-categorie">
                          {categorie.categorie}
                          <span style={{fontWeight: 100}}>V</span>
                              <ul>
                                {
                                  this.state.exercice
                                    .map(exercice =>
                                      <li>{exercice.name}</li>
                                    )
                                }
                              </ul>
                        </li>
                      )
                  }
              </ul>
              
          </div>

         <Link to="/ajouter_exercice"><button className="link-lesson-add">Ajouter un exercice</button></Link>
      </div>
    )
  }
}
