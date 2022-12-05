import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Connexion from './Connexion.js';
import TableauBord from './TableauBord.js';
import MenuPrincipal from './MenuPrincipal.js';
import MaFormation from './MaFormation.js';
import Categorie from './Categorie.js';
import Emplois from './Emploi.js';
import Calendrier from './Planning.js';
import AddEventPlanning from '../features/AddEventPlanning.js';
import Lesson from './Lesson.js';
import Exercice from './Exercice.js';
import AddLesson from '../features/AddLesson.js';
import AddExercice from '../features/AddExercice.js';
import AddCategorie from '../features/AddCategorie.js';
import DeleteCategorie from '../features/DeleteCategorie.js';
import UpdateCategorie from '../features/UpdateCategorie.js';
import JobsAnnouncements from './JobsAnnouncements.js';
import AddJobsAnnouncements from '../features/AddJobsAnnouncements.js';
import IndexJobsAnnouncements from './IndexJobsAnnouncements.js';
import PageProfilUtilisateur from './PageProfilUtilisateur.js';
import FormAddUser from '../features/FormAddUser.js';
import ListUtilisateur from './ListUtilisateur.js';
import Emargement from './Emargement.js';
import ListEmargement from './ListEmargement.js';
import Admin from './Admin.js';
import '../../css/App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>

        <div className='page-tableau-bord'>
          <Routes>
            {/* Dashboard => index */}
            <Route path="/" element={<><MenuPrincipal /><TableauBord /></>} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/profile" element={<PageProfilUtilisateur />} />

            <Route path="/ma-formation" element={<><MenuPrincipal /><MaFormation /></>} />
            <Route path="/emplois" element={<><MenuPrincipal /><Emplois /></>} />

            {/* Calendrier */}
            <Route path="/calendrier" element={<><MenuPrincipal /><Calendrier /></>} />
            <Route path="/add-event-planning" element={<><MenuPrincipal /><AddEventPlanning /></>} />

            <Route path="/categorie" element={<><MenuPrincipal /><Categorie /></>} />
            <Route path="/ajouter_categorie" element={<><MenuPrincipal /><AddCategorie /></>} />
            <Route path="/supprimer_categorie" element={<><MenuPrincipal /><DeleteCategorie /></>} />
            <Route path="/modifier_categorie" element={<><MenuPrincipal /><UpdateCategorie /></>} />
                {/* Cours */}
                <Route path="/cours" element={<><MenuPrincipal /><Lesson /></>} />
                <Route path="/ajouter_cours" element={<><MenuPrincipal /><AddLesson /></>} />

                {/* Exercice */}
                <Route path="/exercice" element={<><MenuPrincipal /><Exercice /></>} />
                <Route path="/ajouter_exercice" element={<><MenuPrincipal /><AddExercice /></>} />

            {/* Fiches d'informations */}
            <Route path="/FormAddUser" element={<><MenuPrincipal /><FormAddUser /></>} />
            <Route path="/listUser" element={<><MenuPrincipal /><ListUtilisateur /></>} />
           

            {/* Annonces boulots */}
            <Route path="/annonces_emplois" element={<><MenuPrincipal /><JobsAnnouncements /></>} />
            <Route path="/ajouter_annonce_emploi" element={<><MenuPrincipal /><AddJobsAnnouncements /></>} />
            <Route path="/index_annonce_emploi" element={<><MenuPrincipal /><IndexJobsAnnouncements /></>} />

            <Route path="/admin" element={<><MenuPrincipal /><Admin /></>} />
              {/* Emargements */}
              <Route path="/emargements" element={<><MenuPrincipal /><Emargement /></>} />
              <Route path="/liste_emargements" element={<><MenuPrincipal /><ListEmargement /></>} />
          </Routes>
        </div>
      </Router>
      
    </div>
    );  
  }
}

export default App;
