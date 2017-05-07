import { combineReducers } from 'redux';

import { giphyProfileReducer as giph } from '../dashboard/reducers/dashboard';

let reducers = combineReducers({
  giph
});

export default reducers;
