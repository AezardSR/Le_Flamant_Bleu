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
import AddLesson from './AddLesson.js';
import '../css/App.css';
import FormAddUser from './FormAddUser.js';
import ListUtilisateur from './ListUtilisateur.js';


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

            {/*  */}
            <Route path="/FormAddUser" element={<FormAddUser />} />
            <Route path="/listUser" element={<ListUtilisateur />} />
          </Routes>
          
        </div>
      </Router>
      
    </div>
    );  
  }
}

export default App;
