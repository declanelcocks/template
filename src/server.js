/* eslint-disable no-console */
import 'babel-polyfill'
import express from 'services/express'
import { Router } from 'express'
import cors from 'cors'
import csrf from 'csurf'
import mongoose from 'mongoose'
import api from 'api'

import React from 'react'
import cookie from 'react-cookie'
import serialize from 'serialize-javascript'
import { ServerStyleSheet } from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { fork, join, all } from 'redux-saga/effects'
import { StaticRouter, matchPath } from 'react-router'
import { renderToString } from 'react-router-server'

import { port, host, basename, mongo } from 'config'
import configureStore from 'store/configure'
import { authUser } from 'store/actions'
import apiService from 'services/api'
import routes from 'components/routes'
import App from 'components/App'
import Html from 'components/Html'
import Error from 'components/Error'

const renderApp = ({
  store, context, location, sheet,
}) => {
  const app = sheet.collectStyles((
    <Provider store={store}>
      <StaticRouter basename={basename} context={context} location={location}>
        <App routes={routes} />
      </StaticRouter>
    </Provider>
  ))
  return renderToString(app)
}

const renderHtml = ({
  serverState, initialState, content, sheet,
}) => {
  const styles = sheet.getStyleElement()
  const { assets } = global
  const state = `
    window.__SERVER_STATE__ = ${serialize(serverState)};
    window.__INITIAL_STATE__ = ${serialize(initialState)};
  `
  const props = {
    styles, assets, state, content,
  }
  const html = <Html {...props} />
  return `<!doctype html>\n${renderToStaticMarkup(html)}`
}

mongoose.connect(mongo.uri)

const router = new Router()

router.use('/api', cors(), api)

router.use(csrf({ cookie: true }))

router.use((req, res, next) => {
  global.api = apiService.create()

  const location = req.url
  const store = configureStore({})
  const context = {}
  const sheet = new ServerStyleSheet()

  cookie.plugToRequest(req, res)
  const { token } = req.cookies
  if (token) store.dispatch(authUser())

  const preloaders = routes.reduce((preloaders, route) => {
    const match = matchPath(req.url, route.path, route)

    if (match) {
      return [
        ...preloaders,
        ...route.component.preload
          ? route.component.preload()
          : Promise.resolve(null),
      ]
    }

    return preloaders
  }, [])

  const waitAll = sagas => function* genTasks() {
    const tasks = yield all(sagas.map(([saga, ...params]) => fork(saga, ...params)))

    if (tasks.length) yield join(...tasks)
  }

  const runTasks = store.runSaga(waitAll(preloaders))

  runTasks.done.then(() => {
    renderApp({ store, context, location, sheet })
      .then(({ state: serverState, html: content }) => {
        if (context.status) {
          res.status(context.status)
        }
        if (context.url) {
          res.redirect(context.url)
        } else {
          const initialState = store.getState()
          res.send(renderHtml({ serverState, initialState, content, sheet }))
        }
      })
      .catch(next)
  })

  store.close()
})

router.use((err, req, res, next) => {
  const sheet = new ServerStyleSheet()
  const content = renderToStaticMarkup(sheet.collectStyles(<Error />))
  res.status(500).send(renderHtml({ content, sheet }))
  console.error(err)
  next(err)
})

const app = express(router)

app.listen(port, (error) => {
  const boldBlue = text => `\u001b[1m\u001b[34m${text}\u001b[39m\u001b[22m`
  if (error) {
    console.error(error)
  } else {
    console.info(`Server is running at ${boldBlue(`http://${host}:${port}${basename}/`)}`)
  }
})
