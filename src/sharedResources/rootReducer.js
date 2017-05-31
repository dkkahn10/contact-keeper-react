import { combineReducers } from 'redux';

import { giphyProfileReducer as giph } from '../dashboard/reducers/dashboard';
import { loginReducer as login } from '../login/reducers/login';

let reducers = combineReducers({
  giph,
  login
});

export default reducers;
