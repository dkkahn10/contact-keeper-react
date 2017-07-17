import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { giphyProfileReducer as giph } from '../dashboard/reducers/dashboard';
import { loginReducer as login } from '../login/reducers/login';

let reducers = combineReducers({
  giph,
  login,
  routing: routerReducer,
	form: formReducer
});

export default reducers;
