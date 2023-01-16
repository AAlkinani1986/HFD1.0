import { Router } from 'express'

import { registrationDoctor } from './registration.js'

const router = Router()
export function doctorRoutes(params) {
  router.use(registrationDoctor(params))
  return router
}
