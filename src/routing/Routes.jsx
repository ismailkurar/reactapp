import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'home/Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <h1>404 Page not found</h1>} />
      </Switch>
    );
  }
}

export default Routes;
