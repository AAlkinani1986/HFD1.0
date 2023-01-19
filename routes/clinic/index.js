import { Router } from 'express'

import { registrationClinic } from './registration.js'
import { Profile } from './profile.js'

const router = Router()
export function clinicRoutes(params) {
  router.use(registrationClinic(params))
  router.use(Profile(params))
  return router

}
