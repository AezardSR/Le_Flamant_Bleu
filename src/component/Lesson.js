import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Lesson.css';

export default class Lesson extends Component {
  render() {
    const categorie = ['CSS', 'PHP', 'HTML', 'Bootstrap', 'Node JS', 'GIT', 'JS', 'Java', 'Python', 'Symfony'];
    const listcategorie = categorie.map((categorie) =>
      <li className="listing-name-categorie">{categorie} <span style={{fontWeight: 100}}>V</span></li>
    );
    return (
      <div>
          <h2>Cours [nom de la formation]</h2>
          <div className="listing-lesson">
              <ul className="listing-categorie-nav">
                {listcategorie}
              </ul>
          </div>
          <button className="link-lesson-add"><Link to="/ajouter_cours">Ajouter un cours</Link></button>
      </div>
    )
  }
}
