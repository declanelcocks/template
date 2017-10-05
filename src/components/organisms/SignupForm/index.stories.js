import React from 'react'
import { storiesOf } from '@storybook/react'
import { SignupForm } from 'containers'

storiesOf('SignupForm', module)
  .add('default', () => (
    <SignupForm />
  ))
