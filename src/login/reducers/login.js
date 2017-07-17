import { FETCH_LOGIN_SUCCESS } from '../actions/login';

let initialState = {
  email: '',
  password: '',
  user_token: ''
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return action.user_token;
    default:
      return state;
  }
}
