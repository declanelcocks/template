import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button } from 'components/atoms'
import { ReduxField } from 'components/organisms'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const SignupForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" label="Email" type="email" component={ReduxField} />
      <Field name="password" label="Password" type="password" component={ReduxField} />
      <Button type="submit" disabled={submitting}>Sign up</Button>
    </Form>
  )
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default SignupForm
