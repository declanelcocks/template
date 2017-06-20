import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { LoginModal } from 'components'

storiesOf('LoginModal', module)
  .add('default', () => (
    <LoginModal
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
