export const initialState = {
  postsError: null,
  posts: null,
}

export const getPosts = (state = initialState) => {
  if (!state.posts) return initialState.posts

  return state.posts
}
