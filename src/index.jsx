import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <main className="container">
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

    </main>
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
