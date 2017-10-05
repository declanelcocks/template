import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { SignupModal } from 'components'

storiesOf('SignupModal', module)
  .add('default', () => (
    <SignupModal
      onClose={action('closed')}
      isOpen
    />
  ))
