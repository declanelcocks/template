import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from 'components'
import { SignupModal } from 'containers'

const InnerButton = styled.div`
  display: flex;
  align-items: center;
`

const SignupButton = ({ onSignup, ...props }) => {
  return (
    <div>
      <Button {...props} onClick={onSignup}>
        <InnerButton>
          Sign up
        </InnerButton>
      </Button>

      <SignupModal />
    </div>
  )
}

SignupButton.propTypes = {
  onSignup: PropTypes.func.isRequired,
}

export default SignupButton
