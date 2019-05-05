import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from 'routing/Routes';

const history = createBrowserHistory()

ReactDom.render(
  <Router history={history}>
    <Route component={Routes} />
  </Router>,
  document.getElementById('root'));
