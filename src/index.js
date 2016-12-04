/* eslint no-underscore-dangle: "off" */
import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, hashHistory } from 'react-router'
import Routes from './routes'
import RootReducer from './reducers/RootReducer'

require('./style/main.css')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  RootReducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)

render(
  <Provider store={store}>
    {/* <Routes history={browserHistory} /> */}
    <Routes history={hashHistory} />
  </Provider>,
  document.getElementById('root'),
)
