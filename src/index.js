import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import LoginContainer from './login/containers/LoginContainer';
import App from './dashboard/containers/App';
import configureStore from './sharedResources/store/configureStore';

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={ LoginContainer } />
      <Route path='/dashboard' component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
