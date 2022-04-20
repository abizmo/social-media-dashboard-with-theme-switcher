import React, { useContext } from 'react';

import Dashboard from './components/Dashboard';
import { ThemeContext } from './ThemeContext';

const style = {
  width: '100vw',
  background: 'var(--clr-bg)',
  color: 'hsl(var(--clr-text-primary))',
  height: '100vh',
};

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      data-theme={dark ? 'dark' : 'light'}
      style={style}
    >
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
    </div>
  );
}

export default App;
