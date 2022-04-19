import React from 'react';

import IconDown from '../../../assets/images/icon-down.svg';
import IconUp from '../../../assets/images/icon-up.svg';
import styles from './TrendStat.module.css';

const icons = {
  down: IconDown,
  up: IconUp,
};

// eslint-disable-next-line react/prop-types
function TrendStat({ trend, trendStat }) {
  return (
    <div className={`flex ${styles.trend}`} style={{ '--clr-trend': `var(--clr-accent-${trend})` }}>
      <img src={icons[trend]} alt={`Going ${trend}`} />
      <p className="fs-200 letter-spacing-3">
        {trendStat}
        %
      </p>
    </div>
  );
}

export default TrendStat;
