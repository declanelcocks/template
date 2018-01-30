export const initialState = {
  postsError: null,
  posts: null,
}

export const selectPosts = (state = initialState) => {
  if (!state.posts) return initialState.posts

  return state.posts
}
