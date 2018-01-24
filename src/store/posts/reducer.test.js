import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

describe('LOAD_POSTS_SUCCESS', () => {
  it('sets the posts and bookmarks in the state', () => {
    const action = {
      type: actions.LOAD_POSTS_SUCCESS,
      payload: {
        data: [1, 2, 3],
      },
    }

    const altState = {
      posts: [1, 2, 3],
      something: 'here',
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      posts: action.payload.data,
    })

    // Since we provide an `altState` our reducer will also reset
    // `postsError` to `null`. Here, we only want to test that it
    // sets the `posts` in the store, so we use `objectContaining`.
    expect(reducer(altState, action)).toEqual(
      expect.objectContaining({
        ...altState,
        posts: action.payload.data,
      })
    )
  })

  it('sets postsError according to the API response', () => {
    const action = {
      type: actions.LOAD_POSTS_SUCCESS,
      payload: {
        data: [1],
      },
    }

    const emptyAction = {
      type: actions.LOAD_POSTS_SUCCESS,
      payload: {
        data: [],
      },
    }

    const stateWithError = {
      postsError: 'my error message',
    }

    // Resets postsError
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      posts: action.payload.data,
      postsError: initialState.postsError,
    })

    // Resets existing postsError
    expect(reducer(stateWithError, action)).toEqual({
      ...stateWithError,
      posts: action.payload.data,
      postsError: initialState.postsError,
    })

    // Sets postsError with a message when the data is []
    expect(reducer(undefined, emptyAction)).toEqual({
      ...initialState,
      posts: emptyAction.payload.data,
      postsError: expect.objectContaining({
        message: expect.any(String),
      }),
    })
  })
})

describe('LOAD_POSTS_ERROR', () => {
  const action = {
    type: actions.LOAD_POSTS_ERROR,
    payload: {
      error: 'something went wrong',
    },
  }

  const altState = {
    postsError: 'something went wrong here again',
    something: 'here',
  }

  const stateWithDeals = {
    postsError: 'something went wrong here again',
    posts: [1, 2, 3],
  }

  it('uses the initialState when none is provided', () => {
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      postsError: action.payload.error,
    })
  })

  it('merges with the state when one is provided', () => {
    expect(reducer(altState, action)).toEqual({
      ...altState,
      postsError: action.payload.error,
    })
  })

  it('does not affect the posts when updating the loading properties', () => {
    expect(reducer(stateWithDeals, action)).toEqual({
      ...stateWithDeals,
      postsError: action.payload.error,
    })
  })
})

describe('RESET_POSTS', () => {
  it('resets the state to initialState', () => {
    const action = { type: actions.RESET_POSTS }

    const altState = {
      postsError: 'something went wrong here again',
      something: 'here',
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
    })

    expect(reducer({}, action)).toEqual({
      ...initialState,
    })

    expect(reducer(altState, action)).toEqual({
      ...initialState,
    })
  })
})
