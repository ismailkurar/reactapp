import React from 'react';

import { Button } from 'antd';

import Page from '../components/page/Page';

const Home = ({ history }) => (
  <Page>
    <div className="home-container">
      <div className="header">
        <Button
          type="primary"
          shape="circle"
          icon="user"
          size="large"
          onClick={() => {history.push('whoami')}}
        />
        <span className="text">Who am I ?</span>
      </div>
    </div>
  </Page>
);

export default Home;
