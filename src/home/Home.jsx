import React from 'react';

import csoon from 'img/coming-soon.gif'; // eslint-disable-line

const Home = () => (
  <div className="home-container">
    <header className="app-header">
      <div className="logo-container">
        ikurar.com
      </div>
    </header>
    <div className="home-content">
      <img src={csoon} className="coming-soon" alt="ikurar.com"/>
    </div>
  </div>
);

export default Home;
