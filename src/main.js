import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers/combinedReducers';

let store = createStore(reducers, applyMiddleware(thunk));

$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
