import React from 'react';
import { Field } from 'redux-form';

const LoginField = props => {
	return(
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
      <div>
      {props.meta.touched && props.meta.error && <span style={{color: 'red'}}>{props.meta.error}</span>}
      </div>
    </div>
  )
}

const LoginFields = props =>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Field
        name='email'
        key='email'
        type='text'
        label='Email'
        component={LoginField}
      />
      <Field
        name='password'
        key='password'
        type='password'
        label='Password'
        component={LoginField}
      />
      <input type='submit' />
    </form>
  )
}

export default LoginFields;
