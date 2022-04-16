import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import 'normalize.css';
import './assets/scss/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
