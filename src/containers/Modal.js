import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectModalOpen } from 'store/modal/selectors'
import { modalHide } from 'store/modal/actions'

import { Modal } from 'components/molecules'

const ModalContainer = props => <Modal {...props} />

ModalContainer.propTypes = {
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
}

const mapStateToProps = (state, { name, isOpen }) => ({
  isOpen: isOpen || selectModalOpen(state.modal, name),
})

const mapDispatchToProps = (dispatch, { name }) => ({
  onClose: () => dispatch(modalHide(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
