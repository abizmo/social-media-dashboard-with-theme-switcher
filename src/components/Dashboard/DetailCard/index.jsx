import React from 'react';

import IconFacebook from '../../../assets/images/icon-facebook.svg';
import IconTwitter from '../../../assets/images/icon-twitter.svg';
import IconInstagram from '../../../assets/images/icon-instagram.svg';
import IconYoutube from '../../../assets/images/icon-youtube.svg';
import TrendStat from '../TrendStat';

import styles from './DetailCard.module.css';

const icons = {
  facebook: IconFacebook,
  twitter: IconTwitter,
  instagram: IconInstagram,
  youtube: IconYoutube,
};

function DetailCard({
  // eslint-disable-next-line react/prop-types
  label, network, stat, trend, trendStat,
}) {
  return (
    <div className={`flex ${styles.card}`}>
      <div className={`flex ${styles.col}`}>
        <p className="text-secondary">{label}</p>
        <p className="fs-800">{stat}</p>
      </div>
      <div className={`flex ${styles.col} ${styles.right}`}>
        <img src={icons[network]} alt={network} />
        <TrendStat trend={trend} trendStat={trendStat} />
      </div>
    </div>
  );
}

export default DetailCard;
