import React, { Component } from 'react';
import './App.css';
import './css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Connexion from './Connexion.js';
import PageProfilUtilisateur from './PageProfilUtilisateur';



function App() {

  return (
    <div className="App">
      {/* <Connexion/> */}
      <PageProfilUtilisateur/>

    </div>
   
  );
}

export default App;
