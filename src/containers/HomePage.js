import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, setStatic } from 'recompose'

import { postsFetchRequest } from 'store/posts/actions'
import { selectPosts } from 'store/posts/selectors'
import { getPosts } from 'store/posts/sagas'
import { HomePage } from 'components/pages'

const HomePageContainer = ({ ...props }) => <HomePage {...props} />

const mapStateToProps = state => ({
  posts: selectPosts(state.posts),
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(postsFetchRequest()),
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if (!this.props.posts) this.props.getPosts()
    },
  }),
)

function preload() {
  return [
    // with params
    // [getPosts, argument1, argument2]
    [getPosts],
  ]
}

export default setStatic('preload', preload)(enhance(HomePageContainer))
