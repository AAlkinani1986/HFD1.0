import { Router } from 'express'
import { loginRouter } from './login.js'
import { registrationRouter } from './registration.js'

const router = Router()
export function authRouter(params) {
  router.use(loginRouter(params))
  router.use(registrationRouter(params))
  return router
}
