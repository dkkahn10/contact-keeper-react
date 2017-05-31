import { FETCH_LOGIN_SUCCESS } from '../actions/login';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      debugger;
      return action.user_token;
    default:
      return state;
  }
}
