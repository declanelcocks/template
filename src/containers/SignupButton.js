import React from 'react'
import { connect } from 'react-redux'
import { selectAuthenticated } from 'store/auth/selectors'
import { modalShow } from 'store/modal/actions'

import { SignupButton } from 'components/organisms'

const SignupButtonContainer = props => <SignupButton {...props} />

const mapStateToProps = state => ({
  authenticated: selectAuthenticated(state.auth),
})

const mapDispatchToProps = dispatch => ({
  onSignup: () => dispatch(modalShow('signup')),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupButtonContainer)
