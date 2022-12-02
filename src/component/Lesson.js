import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Lesson.css';

export default class Lesson extends Component {
  /* OpenCategory(category){
    let button = document.getElementById(category);
    button.classList.toggle('section-close');
    button.classList.toggle('section-open');
  } */

  render() {
    const categorie = ['CSS', 'PHP', 'HTML', 'Bootstrap', 'Node JS', 'GIT', 'JS', 'Java', 'Python', 'Symfony'];
    const listcategorie = categorie.map((categorie) =>
      <li /* onClick={() => this.OpenCategory('listing-name-categorie')} */ className="listing-name-categorie">{categorie} <span style={{fontWeight: 100}}>V</span></li>
    );
    return (
      <div>
          <h2>Cours [nom de la formation]</h2>
          <div className="listing-lesson">
              <ul className="listing-categorie-nav">
                {listcategorie}
              </ul>
          </div>
          <Link to="/ajouter_cours"><button className="link-lesson-add">Ajouter un cours</button></Link>
      </div>
    )
  }
}
