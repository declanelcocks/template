import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    user: null,
    authenticated: false,
  })
})

test('getUser', () => {
  expect(selectors.getUser()).toEqual(selectors.initialState.user)
  expect(selectors.getUser(selectors.initialState)).toEqual(selectors.initialState.user)
})

test('getAuthenticated', () => {
  expect(selectors.getAuthenticated()).toEqual(selectors.initialState.authenticated)
  expect(selectors.getAuthenticated(selectors.initialState)).toEqual(selectors.initialState.authenticated)
})
