import React, { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import FollowersCard from './FollowersCard';
import Header from './Header';
import styles from './Dashboard.module.css';
import DetailCard from './DetailCard';

const data = [
  {
    label: 'followers',
    network: 'facebook',
    stat: '1987',
    trend: 'up',
    trendStat: 12,
    username: '@nathanf',
  },
  {
    label: 'followers',
    network: 'twitter',
    stat: '1044',
    trend: 'up',
    trendStat: 99,
    username: '@nathanf',
  },
  {
    label: 'followers',
    network: 'instagram',
    stat: '11k',
    trend: 'up',
    trendStat: 1099,
    username: '@realnathanf',
  },
  {
    label: 'subscribers',
    network: 'youtube',
    stat: '8239',
    trend: 'down',
    trendStat: 144,
    username: 'Nathan F.',
  },
];

function Dashboard() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{ paddingBlock: '2rem' }}
      data-theme={dark ? 'dark' : 'light'}
    >
      <Header />

      <div className={`grid ${styles.list}`}>
        { data.map(({
          label, network, stat, trend, trendStat,
        }) => (
          <FollowersCard
            key={network}
            label={label}
            network={network}
            stat={stat}
            trend={trend}
            trendStat={trendStat}
          />
        ))}
      </div>

      <h2
        className="fs-600 letter-spacing-1 text-secondary"
        style={{ marginBottom: '1.5rem' }}
      >
        Overview - Today
      </h2>

      <DetailCard />
      Page Views
      87
      3%

      Likes
      52
      2%

      Likes
      5462
      2257%

      Profile Views
      52k
      1375%

      Retweets
      117
      303%

      Likes
      507
      553%

      Likes
      107
      19%

      Total Views
      1407
      12%

    </div>
  );
}

export default Dashboard;
