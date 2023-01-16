import { Router } from 'express'

import { registrationClinic } from './registration.js'

const router = Router()
export function clinicRoutes(params) {
  router.use(registrationClinic(params))
  return router
}
