
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './features/APIToken/ApiContext.js' //'./features/APIToken/ApiContext';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  //</React.StrictMode>
);
