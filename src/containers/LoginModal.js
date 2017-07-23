import React from 'react'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'
import { authLoginRequest, modalHide } from 'store/actions'

import { LoginModal } from 'components'

const LoginModalContainer = ({ ...props }) => <LoginModal {...props} />

const mapStateToProps = state => ({
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onGithubLogin: () => dispatch(authLoginRequest('github')),
  onClose: () => dispatch(modalHide('login')),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
