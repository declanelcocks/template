import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton } from 'components/molecules'
import { LoginForm, Modal } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

class LoginModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    onGithubLogin: PropTypes.func.isRequired,
    onFacebookLogin: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.onClose()
    }
  }

  render() {
    const { onGithubLogin, onFacebookLogin, ...props } = this.props
    return (
      <Modal title="Login" name="login" closeable {...props}>
        <Wrapper>
          <LoginForm />
          <IconButton onClick={onGithubLogin} icon="github">Connect with Github</IconButton>
          <IconButton onClick={onFacebookLogin} icon="facebook">Connect with Facebook</IconButton>
        </Wrapper>
      </Modal>
    )
  }
}

export default LoginModal
