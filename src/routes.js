import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import ExtendedForecast from './containers/ExtendedForecast';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route path="/forecast" component={ExtendedForecast} />
    </Route>
  </Router>
);

export default Routes;
