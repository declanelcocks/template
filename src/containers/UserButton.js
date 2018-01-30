import React from 'react'
import { connect } from 'react-redux'
import { selectAuthenticated } from 'store/auth/selectors'
import { authLogout } from 'store/auth/actions'
import { modalShow } from 'store/modal/actions'

import { UserButton } from 'components/organisms'

const UserButtonContainer = props => <UserButton {...props} />

const mapStateToProps = state => ({
  authenticated: selectAuthenticated(state.auth),
})

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(modalShow('login')),
  onLogout: () => dispatch(authLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserButtonContainer)
