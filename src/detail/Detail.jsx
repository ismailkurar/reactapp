import React from 'react';

import Chart from '../components/chart/Chart';

const Detail = () => (
  <div className="detail-container">
    <header className="app-header">
      <div className="logo-container">
        ikurar.com
      </div>
    </header>
    <div className="detail-content">
      <Chart
        title="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        footer="01 Haziran 2019"
      />
    </div>
  </div>
);

export default Detail;
