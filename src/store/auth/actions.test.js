import * as actions from './actions'

test('authLoginPrepare', () => {
  expect(actions.authLoginPrepare('github', 1)).toEqual({
    type: actions.AUTH_LOGIN_PREPARE,
    service: 'github',
    options: 1,
  })
})

test('authLoginRequest', () => {
  expect(actions.authLoginRequest('github', 1)).toEqual({
    type: actions.AUTH_LOGIN_REQUEST,
    service: 'github',
    options: 1,
  })
})

test('authLoginSuccess', () => {
  expect(actions.authLoginSuccess(1)).toEqual({
    type: actions.AUTH_LOGIN_SUCCESS,
    user: 1,
  })
})

test('authLoginFailure', () => {
  expect(actions.authLoginFailure('test')).toEqual({
    type: actions.AUTH_LOGIN_FAILURE,
    error: 'test',
  })
})

test('authLogout', () => {
  expect(actions.authLogout()).toEqual({ type: actions.AUTH_LOGOUT })
})
