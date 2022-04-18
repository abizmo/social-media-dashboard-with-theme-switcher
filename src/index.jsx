import React from 'react';
import ReactDOM from 'react-dom/client';

import Dashboard from './components/Dashboard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Dashboard />
    <footer className="attribution">
      Challenge by
      {' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
      .
      Coded by
      {' '}
      <a href="https://www.abizmo.dev">Abián Izquierdo</a>
      .
    </footer>
  </React.StrictMode>,
);
