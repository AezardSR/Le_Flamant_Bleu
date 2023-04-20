
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './features/APIToken/ApiContext.js' //'./features/APIToken/ApiContext';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
//noyau de l'application, c'est ici que l'on met le contexte de l'API. Ainsi l'app peut accéder à l'API.
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
          <App />
      </ApiProvider>
    </BrowserRouter>
  //</React.StrictMode>
);
