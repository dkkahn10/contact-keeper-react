import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState) {
  let middlewares = [ thunk, routerMiddleware(browserHistory) ]
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store;
}
