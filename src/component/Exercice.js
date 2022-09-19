import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Lesson.css';

export default class Exercice extends Component {
  render() {
    const categorie = ['CSS', 'PHP', 'HTML', 'Bootstrap', 'Node JS', 'GIT'];
    const listcategorie = categorie.map((categorie) =>
      <li className="listing-name-categorie">{categorie} <span style={{fontWeight: 100}}>V</span></li>
    );
    return (
      <div>
          <h2>Exercices [nom de la formation]</h2>
          <div className="listing-lesson">
            <ul className="listing-categorie-nav">
              {listcategorie}
            </ul>
          </div>

          <button className="link-lesson-add"><Link to="/ajouter_exercice">Ajouter un exercice</Link></button>
      </div>
    )
  }
}
