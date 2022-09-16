import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Lesson.css';

export default class Lesson extends Component {
  render() {
    return (
      <div>
        Page des cours

        <Link to="/ajouter_cours">Ajouter un cours</Link>

      </div>
    )
  }
}
