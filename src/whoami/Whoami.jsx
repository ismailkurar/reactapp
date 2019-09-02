import React from 'react';

import { Icon } from 'antd';

import Page from '../components/page/Page';

const Whoami = () => (
  <Page>
    <div className="whoami-container">
      <div className="title">
        <div className="name">İsmail Kurar</div>
        <div className="job">Senior Frontend Engineer @Commencis</div>
        <div className="contacts">
          <a href="https://www.linkedin.com/in/ikurar/" target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" className="linkedin"/>
          </a>
        </div>
      </div>
    </div>
  </Page>
);

export default Whoami;
