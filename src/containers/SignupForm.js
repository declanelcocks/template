import React from 'react'
import { reduxForm } from 'redux-form'
import { authSignupRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { SignupForm } from 'components'

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
