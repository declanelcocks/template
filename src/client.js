/* eslint-disable no-underscore-dangle */
// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ServerStateProvider } from 'react-router-server'
import cookie from 'react-cookie'

import { basename } from 'config'
import configureStore from 'store/configure'
import { authLoginRequest } from 'store/actions'
import api from 'services/api'
import App from 'components/App'
import routes from 'components/routes'

global.api = api.create()

const serverState = window.__SERVER_STATE__
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

const token = cookie.load('token')
if (initialState.auth.authenticated && token) {
  store.dispatch(authLoginRequest('local', { token }))
}

const renderApp = () => (
  <ServerStateProvider state={serverState}>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App routes={routes} />
      </BrowserRouter>
    </Provider>
  </ServerStateProvider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
