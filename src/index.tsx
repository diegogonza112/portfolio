import React from 'react';
import ReactDOM from 'react-dom/client';
import './Static/fonts/fonts.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Static/styles/custom.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);