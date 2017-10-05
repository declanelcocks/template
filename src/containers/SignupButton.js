import React from 'react'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'
import { modalShow } from 'store/actions'

import { SignupButton } from 'components'

const SignupButtonContainer = props => <SignupButton {...props} />

const mapStateToProps = state => ({
  authenticated: fromAuth.getAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  onSignup: () => dispatch(modalShow('signup')),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupButtonContainer)
