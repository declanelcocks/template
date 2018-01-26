import * as selectors from './selectors'

test('initialState', () => {
  const initialState = {
    postsError: null,
    posts: null,
  }

  expect(selectors.initialState).toEqual(initialState)
})

test('getPosts', () => {
  const posts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]

  expect(selectors.getPosts(undefined)).toEqual(null)
  expect(selectors.getPosts({})).toEqual(null)
  expect(selectors.getPosts(selectors.initialState)).toEqual(null)

  expect(selectors.getPosts({ posts }))
    .toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ])

  expect(selectors.getPosts({ posts })).toEqual([
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ])
})
