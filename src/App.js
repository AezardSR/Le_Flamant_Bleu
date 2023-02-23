import React, { Component, useContext } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Connexion from './component/pages/Connexion.js';
import TableauBord from './component/pages/TableauBord.js';
import MenuPrincipal from './component/pages/MenuPrincipal.js';
import MaFormation from './component/pages/MaFormation.js';
import Categorie from './component/pages/Categorie.js';
import Emplois from './component/pages/Emploi.js';
import Calendrier from './component/pages/Planning.js';
import AddEventPlanning from './component/features/AddEventPlanning.js';
import Lesson from './component/pages/Lesson.js';
import Exercice from './component/pages/Exercice.js';
import AddLesson from './component/features/AddLesson.js';
import AddExercice from './component/features/AddExercice.js';
import AddCategorie from './component/features/AddCategorie.js';
import DeleteCategorie from './component/features/DeleteCategorie.js';
import UpdateCategorie from './component/features/UpdateCategorie.js';
import JobsAnnouncements from './component/pages/JobsAnnouncements.js';
import AddJobsAnnouncements from './component/features/AddJobsAnnouncements.js';
import IndexJobsAnnouncements from './component/pages/IndexJobsAnnouncements.js';
import PageProfilUtilisateur from './component/pages/PageProfilUtilisateur.js';
import FormAddUser from './component/features/FormAddUser.js';
import ListUtilisateur from './component/pages/ListUtilisateur.js';
import Emargement from './component/pages/Emargement.js';
import ListEmargement from './component/pages/ListEmargement.js';
import Admin from './component/pages/Admin.js';
import Actualites from './component/pages/Actualites.js';
import AddActualites from './component/features/AddActualite.js';
import './css/App.css';
import AddActualite from './component/features/AddActualite.js';
import { ApiContext } from './component/features/APIToken/ApiContext.js';
import Login from './component/features/APIToken/login.js';


function App() {
    const {user} = useContext(ApiContext);
    console.log(user);
    const logged = (comp) => {
      if( user.status == "Token is Invalid" || !user.message == "succes" && document.readyState === 'complete'){
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
            <Route path="/" element={logged(<><MenuPrincipal /><TableauBord /></>)} />
            <Route path="/profile" element={logged(<PageProfilUtilisateur />)} />

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
