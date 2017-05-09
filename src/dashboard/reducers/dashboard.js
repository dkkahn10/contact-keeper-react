import { FETCH_GIPHY_PROFILE_SUCCESS } from '../actions/dashboard';

export const giphyProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GIPHY_PROFILE_SUCCESS:
      let newState = { giph: action.giph };
      return newState;
    default:
      return state;
  }
}
