import React, { useState } from 'react';

import styles from './Header.module.css';

function Header() {
  const [dark, setDark] = useState(true);

  const handleSwitchMode = () => setDark((prev) => !prev);

  return (
    <div className={`flex ${styles.header}`}>
      <div className={`flex ${styles.info}`}>
        <h1 className="fs-700">Social Media Dashboard</h1>
        <p className="letter-spacing-3 text-secondary">Total Followers: 23,004</p>
      </div>
      <div className={`flex ${styles.darkMode}`}>
        <p className="text-secondary">Dark Mode</p>
        <button
          className={styles.switch}
          type="button"
          aria-controls="dark-mode"
          aria-checked={dark}
          role="switch"
          onClick={handleSwitchMode}
        >
          <span className="sr-only">Change Mode</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
