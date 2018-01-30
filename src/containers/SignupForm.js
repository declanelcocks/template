import React from 'react'
import { reduxForm } from 'redux-form'
import { authSignupRequest } from 'store/auth/actions'
import { createValidator, required } from 'services/validation'

import { SignupForm } from 'components/organisms'

const SignupFormContainer = props => <SignupForm {...props} />

const onSubmit = (data, dispatch) => dispatch(authSignupRequest('local', data))

const validate = createValidator({
  email: [required],
  password: [required],
})

export default reduxForm({
  form: 'SignupForm',
  onSubmit,
  validate,
})(SignupFormContainer)
