import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './dashboard/containers/App';
import LoginContainer from './login/containers/LoginContainer';
import configureStore from './sharedResources/store/configureStore';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <LoginContainer />
  </Provider>,
  document.getElementById('root')
);
