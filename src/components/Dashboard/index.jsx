import React from 'react';

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
    details: [
      {
        label: 'Page Views',
        stat: '87',
        trend: 'up',
        trendStat: 3,
      },
      {
        label: 'Likes',
        stat: '52',
        trend: 'down',
        trendStat: 2,
      },
    ],
  },
  {
    label: 'followers',
    network: 'twitter',
    stat: '1044',
    trend: 'up',
    trendStat: 99,
    username: '@nathanf',
    details: [
      {
        label: 'Retweets',
        stat: '117',
        trend: 'up',
        trendStat: 303,
      },
      {
        label: 'Likes',
        stat: '507',
        trend: 'up',
        trendStat: 553,
      },
    ],
  },
  {
    label: 'followers',
    network: 'instagram',
    stat: '11k',
    trend: 'up',
    trendStat: 1099,
    username: '@realnathanf',
    details: [
      {
        label: 'Likes',
        stat: '5462',
        trend: 'up',
        trendStat: 2257,
      },
      {
        label: 'Profile Views',
        stat: '52k',
        trend: 'up',
        trendStat: 1375,
      },
    ],
  },
  {
    label: 'subscribers',
    network: 'youtube',
    stat: '8239',
    trend: 'down',
    trendStat: 144,
    username: 'Nathan F.',
    details: [
      {
        label: 'Likes',
        stat: '107',
        trend: 'down',
        trendStat: 19,
      },
      {
        label: 'Total Views',
        stat: '1407',
        trend: 'down',
        trendStat: 12,
      },
    ],
  },
];

function Dashboard() {
  return (
    <div
      className="container"
      style={{ paddingBlock: '2rem' }}
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

      <div className={`grid ${styles.list} ${styles.smallGap}`}>
        { data.map(({
          network, details,
        }) => details.map(({
          label, stat, trend, trendStat,
        }) => (
          <DetailCard
            label={label}
            network={network}
            stat={stat}
            trend={trend}
            trendStat={trendStat}
          />
        )))}
      </div>

    </div>
  );
}

export default Dashboard;
