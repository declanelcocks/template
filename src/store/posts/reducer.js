import { initialState } from './selectors'
import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  RESET_POSTS,
} from './actions'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.data,
        postsError: payload.data.length > 0
          ? initialState.postsError
          : { message: 'No posts found!' },
      }
    case LOAD_POSTS_ERROR:
      return {
        ...state,
        postsError: payload.error,
      }
    case RESET_POSTS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
