import React from 'react'
import { connect } from 'react-redux'
import { selectUser } from 'store/auth/selectors'
import { modalHide } from 'store/modal/actions'

import { SignupModal } from 'components/organisms'

const SignupModalContainer = ({ ...props }) => <SignupModal {...props} />

const mapStateToProps = state => ({
  user: selectUser(state.auth),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(modalHide('signup')),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupModalContainer)
