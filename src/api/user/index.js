import { Router } from 'express'

import { ensureAuth } from 'api/middleware'
import {
  currentUser,
  signup,
  login,
  authGithub,
  authGithubCallback,
  authFacebook,
  authFacebookCallback,
} from './controller'

const router = new Router()

router.get('/users', ensureAuth, currentUser)
router.post('/auth/signup', signup)
router.post('/auth/login', login)
router.post('/auth/github', authGithub)
router.get('/auth/github/callback', authGithubCallback)
router.post('/auth/facebook', authFacebook)
router.get('/auth/facebook/callback', authFacebookCallback)

export User, { schema } from './model'

export default router
