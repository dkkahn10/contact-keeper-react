import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../actions/login';
import { push } from 'react-router-redux';

import LoginFormContainer from './LoginFormContainer';

class LoginContainer extends Component {
  componentWillMount(){
    if (localStorage.token) {
      this.props.alreadyLoggedIn()
    }
  }

  render() {
    let userLogin = () => this.props.getLogin('michaelgt04@gmail.com', 'password')
    return(
      <div>
        <h1>Login</h1>
        <LoginFormContainer />
      </div>
    )
  }
}
// <button onClick={userLogin}>Get Login</button>

let mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getLogin: (email, password) => {
      dispatch(getLogin(email, password))
    },
    alreadyLoggedIn: () => {
      dispatch(push('/dashboard'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
