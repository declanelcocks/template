import React from 'react'
import { connect } from 'react-redux'
import { selectUser } from 'store/auth/selectors'
import { authLoginRequest } from 'store/auth/actions'
import { modalHide } from 'store/modal/actions'

import { LoginModal } from 'components/organisms'

const LoginModalContainer = ({ ...props }) => <LoginModal {...props} />

const mapStateToProps = state => ({
  user: selectUser(state.auth),
})

const mapDispatchToProps = dispatch => ({
  onGithubLogin: () => dispatch(authLoginRequest('github')),
  onFacebookLogin: () => dispatch(authLoginRequest('facebook')),
  onClose: () => dispatch(modalHide('login')),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
