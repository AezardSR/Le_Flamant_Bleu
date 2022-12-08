import React, { Component, useState, useContext } from 'react';
import './App.css';
import './css/global.css'
import Login from './component/features/APIToken/login.js';
import Main from './component/pages/App.js';
import useToken from './component/features/APIToken/useToken.js';
import { ApiContext, ApiContextProvider} from './component/features/APIToken/ApiContext.js'



function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  } else {
  return (
    <div className="App">
      <ApiContextProvider>
        <Main/>
      </ApiContextProvider>
    </div>
  );
  }
}

export default App;
