import * as selectors from './selectors'

test('initialState', () => {
  const initialState = {
    postsError: null,
    posts: null,
  }

  expect(selectors.initialState).toEqual(initialState)
})

test('selectPosts', () => {
  const posts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]

  expect(selectors.selectPosts(undefined)).toEqual(null)
  expect(selectors.selectPosts({})).toEqual(null)
  expect(selectors.selectPosts(selectors.initialState)).toEqual(null)

  expect(selectors.selectPosts({ posts }))
    .toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ])

  expect(selectors.selectPosts({ posts })).toEqual([
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ])
})
