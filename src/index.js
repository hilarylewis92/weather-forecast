import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

import fetchCurrentLocationForecast from './actions/index'

const middleware = [thunk, createLogger];

const store = createStore(
  combineReducers({
    weatherApp: reducer,
  }),
  {}, // initial state object
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(fetchCurrentLocationForecast)
