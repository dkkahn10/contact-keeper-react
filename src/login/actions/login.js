import { push } from 'react-router-redux';

const FETCH_LOGIN = 'FETCH_LOGIN';
const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';

export {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS
}

export const getLoginSuccess = data => {
  return {
    type: 'FETCH_LOGIN_SUCCESS',
    user_token: data
  }
}

export const getLogin = (email, password) => {
	let userInfo = { email: email, password: password }
  let body = JSON.stringify(userInfo)
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/users/login', {
      method: 'POST',
      body,
      headers
    })
    .then(response => {
			let parsed = response.json()
			return parsed
		}).then(token => {
			localStorage.setItem('token', token.auth_token)
      dispatch(push('/dashboard'))
      dispatch(getLoginSuccess(token))
    }).catch(error => {
			debugger;
			console.log(error)
			console.log('You cant log in')
		})
  }
}
