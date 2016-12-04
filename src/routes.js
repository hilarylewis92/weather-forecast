import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import ExtendedForecast from './containers/ExtendedForecast'
import Settings from './containers/Settings'
import Dashboard from './components/Dashboard'

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route path="/forecast/:id" component={ExtendedForecast} />
    </Route>
  </Router>
)

export default Routes
