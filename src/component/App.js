import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Connexion from './Connexion.js';
import TableauBord from './TableauBord.js';
import MenuPrincipal from './MenuPrincipal.js';
import Lesson from './Lesson.js';
import Exercice from './Exercice.js';
import AddLesson from './AddLesson.js';
import AddExercice from './AddExercice.js';
import '../css/App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      
      <Router>
        <div className='page-tableau-bord'>
      
          <MenuPrincipal />

          <Routes>
            {/* Dashboard => index */}
            <Route path="/login" element={<Connexion />} />
            <Route path="/" element={<TableauBord />} />

            {/* Cours */}
            <Route path="/cours" element={<Lesson />} />
            <Route path="/ajouter_cours" element={<AddLesson />} />

            {/* Exercice */}
            <Route path="/exercice" element={<Exercice />} />
            <Route path="/ajouter_exercice" element={<AddExercice />} />

          </Routes>
          
        </div>
      </Router>
      
    </div>
    );  
  }
}

export default App;
