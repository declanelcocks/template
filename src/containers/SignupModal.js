import React from 'react'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'
import { modalHide } from 'store/actions'

import { SignupModal } from 'components'

const SignupModalContainer = ({ ...props }) => <SignupModal {...props} />

const mapStateToProps = state => ({
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(modalHide('signup')),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupModalContainer)
