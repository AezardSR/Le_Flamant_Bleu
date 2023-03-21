import React, { Component, useContext } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Connexion from './pages/Connexion.js';
import TableauBord from './pages/TableauBord.js';
import MenuPrincipal from './pages/MenuPrincipal.js';
import MaFormation from './pages/MaFormation.js';
import Categorie from './pages/Categorie.js';
import Emplois from './pages/Emploi.js';
import Calendrier from './pages/Planning.js';
import AddEventPlanning from './features/AddEventPlanning.js';
import UpdateEventPlanning from './features/UpdateEventPlanning.js';
import Lesson from './pages/Lesson.js';
import Exercice from './pages/Exercice.js';
import AddLesson from './features/AddLesson.js';
import AddExercice from './features/AddExercice.js';
import AddCategorie from './features/AddCategorie.js';
import DeleteCategorie from './features/DeleteCategorie.js';
import UpdateCategorie from './features/UpdateCategorie.js';
import JobsAnnouncements from './pages/JobsAnnouncements.js';
import AddJobsAnnouncements from './features/AddJobsAnnouncements.js';
import IndexJobsAnnouncements from './pages/IndexJobsAnnouncements.js';
import PageProfilUtilisateur from './pages/PageProfilUtilisateur.js';
import FormAddUser from './features/FormAddUser.js';
import ListUtilisateur from './pages/ListUtilisateur.js';
import Emargement from './pages/Emargement.js';
import ListEmargement from './pages/ListEmargement.js';
import Admin from './pages/Admin.js';
import Actualites from './pages/Actualites.js';
import AddActualites from './features/AddActualite.js';
import './css/App.css';
import AddActualite from './features/AddActualite.js';
import { ApiContext } from './features/APIToken/ApiContext.js';
import Login from './features/APIToken/login.js';


function App() {
    const {user} = useContext(ApiContext);
    console.log(user);
    const logged = (comp) => {
      if( user.status == "Token is Invalid" || !user["message"] == "succes" && document.readyState === 'complete'){
        return <Navigate to="/login" replace={true} />
      } else {
        return comp
      }
    }
    return (
    <div className="App">
      <Router>

        <div className='page-tableau-bord'>
          <Routes>
            {/* Dashboard => index */}
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/" element={<><MenuPrincipal /><TableauBord /></>} />
            <Route path="/profile" element={<PageProfilUtilisateur />} />
            <Route path="/ma-formation" element={<><MenuPrincipal /><MaFormation /></>} />
            <Route path="/emplois" element={<><MenuPrincipal /><Emplois /></>} />

            {/* Calendrier */}
            <Route path="/calendrier" element={<><MenuPrincipal /><Calendrier /></>} />
            <Route path="/add-event-planning" element={<><MenuPrincipal /><AddEventPlanning /></>} />
            <Route path="/update/:appointmentID" element={<><MenuPrincipal /><UpdateEventPlanning /></>} />

            <Route path="/categorie" element={<><MenuPrincipal /><Categorie /></>} />
            <Route path="/ajouter_categorie" element={<><MenuPrincipal /><AddCategorie /></>} />
            <Route path="/supprimer_categorie" element={<><MenuPrincipal /><DeleteCategorie /></>} />
            <Route path="/modifier_categorie" element={<><MenuPrincipal /><UpdateCategorie /></>} />
                {/* Cours */}
                <Route path="/cours" element={<><MenuPrincipal /><Lesson /></>} />
                <Route path="/ajouter_cours" element={<><MenuPrincipal /><AddLesson /></>} />

                {/* Exercice */}
                <Route path="/exercices" element={<><MenuPrincipal /><Exercice /></>} />
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

              {/* Actualités */}
              <Route path="/actualites" element={<><MenuPrincipal /><Actualites /></>} />
              <Route path="/ajouter_actualite" element={<><MenuPrincipal /><AddActualites /></>} />
          </Routes>
        </div>
      </Router>
      
    </div>
    );  
  }

export default App;
