import { reduxForm } from 'redux-form'
import { getLogin } from '../actions/login';
import LoginFields from './LoginFields'
let validate = fields => {
  let { email, password } = fields

  const errors = {};

  if (!email) {
    errors['email'] = 'Please enter an email.'
  }
  if (!password) {
    errors['password'] = 'Please enter a password.'
  }

  console.log('it ran')
  return errors
}

let onSubmit = (values, dispatch) => {
  debugger;
  dispatch(getLogin(values.email, values.password))
};

export default reduxForm({ form: 'login', validate: validate, onSubmit: onSubmit })(LoginFields)
