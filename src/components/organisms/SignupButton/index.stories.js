import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { SignupButton } from 'components'

storiesOf('SignupButton', module)
  .add('default', () => (
    <SignupButton
      onSignup={action('signup')}
    />
  ))
