import React, { useContext } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import TableauBord from './pages/TableauBord.js';
import MenuPrincipal from './pages/MenuPrincipal.js';
import MaFormation from './pages/MaFormation.js';
import Categorie from './pages/Categorie.js';
import Parts from './pages/Parts.js';
import Emplois from './pages/Emploi.js';
import Calendrier from './pages/Planning.js';
import AddEventPlanning from './features/AddEventPlanning.js';
import UpdateEventPlanning from './features/UpdateEventPlanning.js';
import Lesson from './pages/Lesson.js';
import Exercice from './pages/Exercice.js';
import AddLesson from './features/AddLesson.js';
import GestionLesson from './features/GestionLesson.js';
import GestionExercice from './features/GestionExercice.js';
import AddExercice from './features/AddExercice.js';
import AddCategorie from './features/AddCategorie.js';
import AddParts from './features/AddParts.js';
import DeleteCategorie from './features/DeleteCategorie.js';
// import DeleteParts from './features/DeleteParts.js';
import UpdateCategorie from './features/UpdateCategorie.js';
import UpdateParts from './features/UpdateParts.js';
import UpdateLessons from './features/UpdateLessons.js';
import UpdateExercices from './features/UpdateExercices.js';
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
import ActualitesListing from './pages/ActualitesListing.js';
import ActualitesID from './pages/ActualitesID.js';
import UpdateActualites from './features/UpdateActualite.js';
import GestionJobsAnnoucements from './pages/OffresEmplois.js';
import UpdateJobsOffers from './features/UpdateJobsOffers.js';
import JobOffersID from './pages/JobOffersID.js';
import { ApiContext } from './features/APIToken/ApiContext.js';
import Login from './features/APIToken/login.js';
import Register from './pages/register.js';

function App() {
    const {user, userStatus} = useContext(ApiContext); // on importe le contexte de l'API, précisément la variable user
    // on teste si l'utilisateur est connecté, si oui on affiche la page, sinon on le redirige vers la page de connexion
    const logged = (comp) => {
      if( !localStorage.getItem("token") || user.status === "Token is Invalid" || user.status === "Token is Expired" || !userStatus === "connected"){
       return <Navigate to="/login" replace={true} />
     } else {
       return comp
     }
    }

    // On renvoie le composant app qui est les coeurs de l'application
    // Ce composant contient toutes les routes de l'application, il est appelé dans
    // le fichier index.js qui est le point d'entrée de l'application autour du quel on a mis le context de l'API
    return (
    <div className="App">
        <div className='page-tableau-bord'>
          <Routes>
            {/* Dashboard => index */}
            <Route path='/login' element={<Login/>}/>
            <Route path="/" element={logged(<><MenuPrincipal /><TableauBord /></>)} />
            <Route path="/profile" element={logged(<PageProfilUtilisateur />)} />
            <Route path="/ma-formation" element={logged(<><MenuPrincipal /><MaFormation /></>)} />
            <Route path="/emplois" element={logged(<><MenuPrincipal /><Emplois /></>)} />
            <Route path="/register" element={logged(<><MenuPrincipal /><Register /></>)} />

            {/* Calendrier */}
            <Route path="/calendrier" element={logged(<><MenuPrincipal /><Calendrier /></>)} />
            <Route path="/add-event-planning" element={logged(<><MenuPrincipal /><AddEventPlanning /></>)} />
            <Route path="/update/:appointmentID" element={logged(<><MenuPrincipal /><UpdateEventPlanning /></>)} />

            <Route path="/categorie" element={<><MenuPrincipal /><Categorie /></>} />
            <Route path="/ajouter-categorie" element={<><MenuPrincipal /><AddCategorie /></>} />
            <Route path="/modifier-categorie/:categoryID" element={<><MenuPrincipal /><UpdateCategorie /></>} />

            <Route path="/parties" element={<><MenuPrincipal /><Parts /></>} />
            <Route path="/ajouter-parties" element={<><MenuPrincipal /><AddParts /></>} />
            <Route path="/modifier-parties/:partsID" element={<><MenuPrincipal /><UpdateParts /></>} />

                {/* Cours */}
                <Route path="/cours" element={logged(<><MenuPrincipal /><Lesson /></>)} />
                <Route path="/gestion-cours" element={logged(<><MenuPrincipal /><GestionLesson /></>)} />
                <Route path="/ajouter-cours" element={logged(<><MenuPrincipal /><AddLesson /></>)} />
                <Route path="/modifier-cours/:lessonsID" element={logged(<><MenuPrincipal /><UpdateLessons /></>)} />

                {/* Exercice */}
                <Route path="/exercices" element={logged(<><MenuPrincipal /><Exercice /></>)} />
                <Route path="/gestion-exercices" element={logged(<><MenuPrincipal /><GestionExercice /></>)} />
                <Route path="/ajouter-exercice" element={logged(<><MenuPrincipal /><AddExercice /></>)} />
                <Route path="/modifier-exercice/:exercicesID" element={logged(<><MenuPrincipal /><UpdateExercices /></>)} />

            {/* Fiches d'informations */}
            <Route path="/form-add-user" element={logged(<><MenuPrincipal /><FormAddUser /></>)} />
            <Route path="/list-user" element={logged(<><MenuPrincipal /><ListUtilisateur /></>)} />
           

            {/* Annonces boulots */}
            <Route path="/annonces-emplois" element={logged(<><MenuPrincipal /><JobsAnnouncements /></>)} />
            <Route path="/index-annonce-emploi" element={logged(<><MenuPrincipal /><IndexJobsAnnouncements /></>)} />
            <Route path="/offres-emplois" element={logged(<><MenuPrincipal /><GestionJobsAnnoucements /></>)} />
            <Route path="/offres-emplois/:JobOffersID" element={logged(<><MenuPrincipal /><JobOffersID /></>)} />
            <Route path="/ajouter-annonce-emploi" element={logged(<><MenuPrincipal /><AddJobsAnnouncements /></>)} />
            <Route path="/modifier-offres-emplois/:jobOffersID" element={logged(<><MenuPrincipal /><UpdateJobsOffers /></>)} />

            <Route path="/admin" element={logged(<><MenuPrincipal /><Admin /></>)} />
              {/* Emargements */}
              <Route path="/emargements" element={logged(<><MenuPrincipal /><Emargement /></>)} />
              <Route path="/liste-emargements" element={logged(<><MenuPrincipal /><ListEmargement /></>)} />

              {/* Actualités */}
              <Route path="/actualites" element={logged(<><MenuPrincipal /><Actualites /></>)} />
              <Route path="/nos-actualites" element={logged(<><MenuPrincipal /><ActualitesListing /></>)} />
              <Route path="/nos-actualites/actualite/:actualitesID" element={logged(<><MenuPrincipal /><ActualitesID /></>)} />
              <Route path="/ajouter-actualite" element={logged(<><MenuPrincipal /><AddActualites /></>)} />
              <Route path="/modifier-actualite/:actualitesID" element={logged(<><MenuPrincipal /><UpdateActualites /></>)} />
          </Routes>
        </div>

    </div>
    );  
  }

export default App;
