import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'home/Home';
import WhoAmI from 'whoami/Whoami';

const Routes = () => (
  <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />}/>
      <Route exact path="/whoami" render={(props) => <WhoAmI {...props} />}/>
      <Route render={() => <h1>404 Page not found</h1>} />
    </Switch>
);
export default Routes;
