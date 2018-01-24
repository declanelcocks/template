import * as actions from './actions'

test('postsFetchRequest', () => {
  const params = { id: 1 }

  expect(actions.postsFetchRequest(params)).toEqual(
    expect.objectContaining({
      type: actions.LOAD_POSTS,
      payload: { params },
    })
  )

  expect(actions.postsFetchRequest()).toEqual(
    expect.objectContaining({
      type: actions.LOAD_POSTS,
      payload: { params: {} },
    })
  )
})

test('postsFetchRequestSuccess', () => {
  const data = { something: 'here' }

  expect(actions.postsFetchRequestSuccess(data)).toEqual(
    expect.objectContaining({
      type: actions.LOAD_POSTS_SUCCESS,
      payload: { data },
    })
  )
})

test('postsFetchRequestError', () => {
  const error = { msg: 'Something went wrong!' }

  expect(actions.postsFetchRequestError(error)).toEqual(
    expect.objectContaining({
      type: actions.LOAD_POSTS_ERROR,
      payload: { error },
    })
  )
})

test('postsReset', () => {
  expect(actions.postsReset()).toEqual(
    expect.objectContaining({
      type: actions.RESET_POSTS,
    })
  )
})
