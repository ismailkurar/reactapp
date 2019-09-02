import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => (
  import('home/Home')
));

const Detail = React.lazy(() => (
  import('detail/Detail')
));

const Routes = () => (
  <Suspense fallback={<span>Loading ...</span>}>
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />}/>
      <Route exact path="/detail" render={(props) => <Detail {...props} />} />
      <Route render={() => <h1>404 Page not found</h1>} />
    </Switch>
  </Suspense>
);

export default Routes;
