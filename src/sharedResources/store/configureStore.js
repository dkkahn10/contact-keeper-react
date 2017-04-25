import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';

export default function configureStore(initalState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )

  return store;
}
