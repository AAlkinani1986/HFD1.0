import { Router } from 'express'
import { loginRouter } from './login.js'
import { registrationRouter } from './registration.js'
import { resetPassword } from './resetPassword.js'
import { usersList } from './usersList.js'
import { verification } from './verification.js'

const router = Router()
export function authRouter(params) {
  router.use(loginRouter(params))
  router.use(registrationRouter(params))
  router.use(usersList(params))
  router.use(verification(params))
  router.use(resetPassword(params))
  return router
}
