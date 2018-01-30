import React from 'react'
import { reduxForm } from 'redux-form'
import { authLoginRequest } from 'store/auth/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components/organisms'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => dispatch(authLoginRequest('local', data))

const validate = createValidator({
  email: [required],
  password: [required],
})

export default reduxForm({
  form: 'LoginForm',
  onSubmit,
  validate,
})(LoginFormContainer)
