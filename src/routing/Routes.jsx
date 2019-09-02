import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Skeleton } from 'antd';

const Home = React.lazy(() => (
  import('home/Home')
));

const WhoAmI = React.lazy(() => (
  import('whoami/Whoami')
));

const Routes = () => (
  <Suspense fallback={<Skeleton active />}>
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />}/>
      <Route exact path="/whoami" render={(props) => <WhoAmI {...props} />}/>
      <Route render={() => <h1>404 Page not found</h1>} />
    </Switch>
  </Suspense>
);

export default Routes;
