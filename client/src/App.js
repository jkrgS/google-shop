import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import LayoutNav from './components/shared/Layout.js';

const Home = React.lazy(() => {
  return import('./containers/home.js');
});

const App = () => {
  const routes = (
    <Switch>
      <Route
        exact
        path="/home"
        location={{ hash: 'Home' }}
        render={(props) => (
          <LayoutNav>
            <Home {...props} />
          </LayoutNav>
        )}
      />
      <Redirect to="/home" />
    </Switch>
  );
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </BrowserRouter>
  );
};

export default withRouter(App);
