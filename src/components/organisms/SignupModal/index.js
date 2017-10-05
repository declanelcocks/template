import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SignupForm, Modal } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

class SignupModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    onClose: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.onClose()
    }
  }

  render() {
    return (
      <Modal title="Sign up" name="signup" closeable {...this.props}>
        <Wrapper>
          <SignupForm />
        </Wrapper>
      </Modal>
    )
  }
}

export default SignupModal
