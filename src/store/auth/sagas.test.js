import { call, fork } from 'redux-saga/effects'
import saga, * as sagas from './sagas'

describe('promises', () => {
  test('oauth2 returns a promise', () => {
    const promise = sagas.oauth2
    expect(promise()).toBeInstanceOf(Promise)
  })

  test('openPopup returns a promise', () => {
    const payload = { url: {}, config: {} }
    const promise = sagas.openPopup
    expect(promise(payload)).toBeInstanceOf(Promise)
  })

  test('closePopup returns a promise', () => {
    const payload = { window: {}, interval: {} }
    const promise = sagas.closePopup
    expect(promise(payload)).toBeInstanceOf(Promise)
  })
})

test('watchAuthLoginGithub', () => {
  const generator = sagas.watchAuthLoginGithub()
  generator.next()
  expect(generator.next().value).toEqual(call(sagas.loginGithub))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLoginLocal))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLoginGithub))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLoginFacebook))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLogout))
})
