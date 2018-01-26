export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR'
export const RESET_POSTS = 'RESET_POSTS'

export const postsFetchRequest = (params = {}) => ({
  type: LOAD_POSTS,
  payload: { params },
})

export const postsFetchRequestSuccess = data => ({
  type: LOAD_POSTS_SUCCESS,
  payload: { data },
})

export const postsFetchRequestError = error => ({
  type: LOAD_POSTS_ERROR,
  payload: { error },
})

export const postsReset = () => ({
  type: RESET_POSTS,
})
