const FETCH_LOGIN = 'FETCH_LOGIN';
const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';

export {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS
}

export const getLoginSuccess = data => {
  debugger;
  return {
    type: 'FETCH_LOGIN_SUCCESS',
    user_token: data
  }
}

export const getLogin = (userData) => {
  let body = JSON.stringigy(userData)
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users/login', {
      method: 'POST',
      body,
      headers
    })
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(token => {
      return dispatch(getLoginSuccess(token))
    })
  }
}
