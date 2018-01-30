import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { parse as parseUrl } from 'url'
import {
  parse as parseQueryParams,
  stringify as stringifyQueryParams,
} from 'querystring'

import api from 'services/api'
import * as actions from './actions'

export const signupAction = (suffix, service) => action =>
  action.type === `AUTH_SIGNUP_${suffix}` && action.service === service

export const serviceAction = (suffix, service) => action =>
  action.type === `AUTH_LOGIN_${suffix}` && action.service === service

export const oauth2 = config =>
  new Promise((resolve) => {
    const params = {
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      scope: config.scope,
      display: 'popup',
      response_type: 'code',
    }

    const url = `${config.authorizationUrl}?${stringifyQueryParams(params)}`
    resolve({ url })
  })

export const openPopup = ({ url, config }) =>
  new Promise((resolve) => {
    const width = config.width || 500
    const height = config.height || 500
    const options = {
      width,
      height,
      top: window.screenY + ((window.outerHeight - height) / 2.5),
      left: window.screenX + ((window.outerWidth - width) / 2),
    }
    const popup = window.open(url, '_blank', stringifyQueryParams(options, ','))

    if (url === 'about:blank') {
      popup.document.body.innerHTML = 'Loading...'
    }

    resolve({ window: popup })
  })

export const pollPopup = ({ window, config, requestToken }) =>
  new Promise((resolve, reject) => {
    const redirectUri = parseUrl(config.redirectUri)
    const redirectUriPath = redirectUri.host + redirectUri.pathname

    if (requestToken) {
      window.location = `${config.authorizationUrl}?${stringifyQueryParams(requestToken)}`
    }

    const polling = setInterval(() => {
      if (!window || window.closed) {
        clearInterval(polling)
      }

      try {
        const popupUrlPath = window.location.host + window.location.pathname

        if (popupUrlPath === redirectUriPath) {
          if (window.location.search || window.location.hash) {
            const query = parseQueryParams(window.location.search.substring(1).replace(/\/$/, ''))
            const hash = parseQueryParams(window.location.hash.substring(1).replace(/[/$]/, ''))
            const params = Object.assign({}, query, hash)

            if (params.error) {
              reject(params.error)
            } else {
              resolve({ oauthData: params, window, interval: polling })
            }
          } else {
            reject(new Error('OAuth redirect has occurred but no query or hash parameters were found.'))
          }
        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in Internet Explorer.
      }
    }, 500)
  })

export const closePopup = ({ window, interval }) =>
  new Promise((resolve) => {
    clearInterval(interval)
    window.close()
    resolve()
  })

export const exchangeCodeForToken = ({ oauthData, config, window, interval }) =>
  new Promise((resolve, reject) => {
    const data = Object.assign({}, oauthData, config)

    api.post(config.url, data).then(({ token, user }) => {
      return resolve({ token, user, window, interval })
    }).catch((err) => {
      reject(err)
      closePopup({ window, interval })
    })
  })

export function* loginGithub() {
  const config = {
    url: '/auth/github',
    clientId: '8238d57f2bcc4cd3d0c7',
    redirectUri: 'http://localhost:3000/api/auth/github/callback',
    authorizationUrl: 'https://github.com/login/oauth/authorize',
    scope: 'user user:email repo',
    width: 452,
    height: 633,
  }

  try {
    const { url } = yield oauth2(config)
    const { window } = yield openPopup({ url, config })
    const { oauthData, window: ppWindow, interval } = yield pollPopup({ window, config })
    const { token, user, window: exWindow, interval: exInterval } = yield exchangeCodeForToken({ oauthData, config, window: ppWindow, interval })

    cookie.save('token', token)

    yield put(actions.authLoginSuccess(user))
    yield closePopup({ window: exWindow, interval: exInterval })
  } catch (e) {
    yield put(actions.authLoginFailure(e))
  }
}

export function* watchAuthLoginGithub() {
  while (true) {
    yield take(serviceAction('REQUEST', 'github'))
    yield call(loginGithub)
  }
}

export function* loginFacebook() {
  const config = {
    url: '/auth/facebook',
    clientId: '763079670530508',
    redirectUri: 'http://localhost:3000/api/auth/facebook/callback',
    authorizationUrl: 'https://www.facebook.com/v2.5/dialog/oauth',
    scope: 'email,user_location',
    width: 580,
    height: 400,
  }

  try {
    const { url } = yield oauth2(config)
    const { window } = yield openPopup({ url, config })
    const { oauthData, window: ppWindow, interval } = yield pollPopup({ window, config })
    const { token, user, window: exWindow, interval: exInterval } = yield exchangeCodeForToken({ oauthData, config, window: ppWindow, interval })

    cookie.save('token', token)

    yield put(actions.authLoginSuccess(user))
    yield closePopup({ window: exWindow, interval: exInterval })
  } catch (e) {
    yield put(actions.authLoginFailure(e))
  }
}

export function* signupLocal(data) {
  try {
    const { token, user } = yield api.post('/auth/signup', data)
    cookie.save('token', token)
    yield put(actions.authLoginSuccess(user))
  } catch (e) {
    yield put(actions.authLoginFailure(e))
  }
}

export function* watchAuthSignupLocal() {
  while (true) {
    const { options } = yield take(signupAction('REQUEST', 'local'))
    yield call(signupLocal, options)
  }
}

export function* watchAuthLoginFacebook() {
  while (true) {
    yield take(serviceAction('REQUEST', 'facebook'))
    yield call(loginFacebook)
  }
}

export function* loginLocal(data) {
  try {
    const { token, user } = yield api.post('/auth/login', data)
    cookie.save('token', token)
    yield put(actions.authLoginSuccess(user))
  } catch (e) {
    const token = cookie.load('token')
    token
      ? yield put(actions.authLogout(e))
      : yield put(actions.authLoginFailure(e))
  }
}

export function* watchAuthLoginLocal() {
  while (true) {
    const { options } = yield take(serviceAction('REQUEST', 'local'))
    yield call(loginLocal, options)
  }
}

export function* watchAuthLogout() {
  while (true) {
    yield take(actions.AUTH_LOGOUT)
    cookie.remove('token')
  }
}

export default function* () {
  yield fork(watchAuthSignupLocal)
  yield fork(watchAuthLoginLocal)
  yield fork(watchAuthLoginGithub)
  yield fork(watchAuthLoginFacebook)
  yield fork(watchAuthLogout)
}
