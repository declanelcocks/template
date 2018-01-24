import React from 'react'
import PropTypes from 'prop-types'
import { SignupButton, UserButton } from 'containers'

const HomePage = ({ posts }) => {
  return (
    <div>
      <SignupButton />
      <UserButton />

      {posts && posts.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  )
}

HomePage.propTypes = {
  posts: PropTypes.array,
}

export default HomePage
