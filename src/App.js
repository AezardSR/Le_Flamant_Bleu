import React, { Component, useState } from 'react';
import './App.css';
import './css/global.css'
import Connexion from './component/pages/Connexion.js';
import PageProfilUtilisateur from './component/pages/PageProfilUtilisateur.js';
import Main from './component/pages/App.js';


function App() {
  const [token, setToken] = useState();

  if(!token){
    return <Connexion setToken={setToken} />
  }

  return (
    <div className="App">
      {/* <Connexion/> */}
      <Main/>

    </div>
   
  );
}

export default App;
