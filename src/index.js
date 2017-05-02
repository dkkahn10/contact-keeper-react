import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './dashboard/containers/App';
import reducers from './sharedResources/rootReducer';
import store from './sharedResources/store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
