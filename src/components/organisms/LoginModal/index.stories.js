import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { LoginModal } from 'components'

storiesOf('LoginModal', module)
  .add('default', () => (
    <LoginModal
      onGithubLogin={action('github')}
      onFacebookLogin={action('facebook')}
      onClose={action('closed')}
      isOpen
    />
  ))
