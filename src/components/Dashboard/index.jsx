import React, { useState } from 'react';

import ThemeContext from '../../ThemeContext';
import Header from './Header';

function Dashboard() {
  const [dark, setDark] = useState(true);

  const handleSwitchMode = () => setDark((prev) => !prev);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ dark, handleSwitchMode }}>
      <div
        className="container"
        data-theme={dark ? 'dark' : 'light'}
      >
        <Header />

        @nathanf
        1987
        Followers
        12 Today

        @nathanf
        1044
        Followers
        99 Today

        @realnathanf
        11k
        Followers
        1099 Today

        Nathan F.
        8239
        Subscribers
        144 Today

        Overview - Today

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
    </ThemeContext.Provider>
  );
}

export default Dashboard;
