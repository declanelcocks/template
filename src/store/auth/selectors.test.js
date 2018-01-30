import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    user: null,
    authenticated: false,
  })
})

test('selectUser', () => {
  expect(selectors.selectUser()).toEqual(selectors.initialState.user)
  expect(selectors.selectUser(selectors.initialState)).toEqual(selectors.initialState.user)
})

test('selectAuthenticated', () => {
  expect(selectors.selectAuthenticated()).toEqual(selectors.initialState.authenticated)
  expect(selectors.selectAuthenticated(selectors.initialState)).toEqual(selectors.initialState.authenticated)
})
