import React from 'react';

import IconFacebook from '../../../assets/images/icon-facebook.svg';
import IconTwitter from '../../../assets/images/icon-twitter.svg';
import IconInstagram from '../../../assets/images/icon-instagram.svg';
import IconYoutube from '../../../assets/images/icon-youtube.svg';
import IconDown from '../../../assets/images/icon-down.svg';
import IconUp from '../../../assets/images/icon-up.svg';
import styles from './FollowersCard.module.css';
import TrendStat from '../TrendStat';

const icons = {
  facebook: IconFacebook,
  twitter: IconTwitter,
  instagram: IconInstagram,
  youtube: IconYoutube,
  down: IconDown,
  up: IconUp,
};

function FollowersCard({
// eslint-disable-next-line react/prop-types
  label, network, stat, trend, trendStat,
}) {
  return (
    <div className={`flex ${styles.card}`} style={{ '--clr-social': `var(--clr-${network})` }}>
      <div className={`flex ${styles.title}`}>
        <img src={icons[network]} alt={network} />
        <p className="fs-200 text-secondary">
          @nathanf
        </p>
      </div>
      <div className={`flex ${styles.followers}`}>
        <p className="fs-900 letter-spacing-1">{stat}</p>
        <p className="fs-200 fw-thin letter-spacing-4 uppercase text-secondary">{label}</p>
      </div>
      <TrendStat trend={trend} trendStat={trendStat} />
    </div>
  );
}

export default FollowersCard;
