import React, { Component, useState } from 'react';
import './App.css';
import './css/global.css'
import Login from './component/features/APIToken/login.js';
import PageProfilUtilisateur from './component/pages/PageProfilUtilisateur.js';
import Main from './component/pages/App.js';
import useToken from './component/features/APIToken/useToken.js';

function App() {
  const { token, setToken } = useToken();
  
  if(!token){
    return <Login setToken={setToken} />
  } else {
  return (
    <div className="App">
      {/* <Connexion/> */}
      <Main/>
    </div>
  );
  }
}

export default App;
