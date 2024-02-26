import { createRoot } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
createRoot(root).render(
  <Auth0Provider
    domain="dev-6qf3015f6hz0j013.eu.auth0.com"
    clientId="LbWvgwrKtzABG1nZmauJzPzi0nHA2SLu"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
