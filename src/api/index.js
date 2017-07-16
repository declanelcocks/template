import { Router } from 'express'

import { isAuthenticated } from 'api/middleware'
import test from 'api/test'
import user from 'api/user'

const router = new Router()

router.use(isAuthenticated)
router.use('/test', test)
router.use('/', user) // includes `/users` and `/auth` endpoints

export default router
