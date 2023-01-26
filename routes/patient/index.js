import { Router } from 'express'
import { profile } from './profile.js'
import { registration } from './registration.js'

const router = Router()
export function patientRoutes(params) {
  router.use(registration(params))
  router.use(profile(params))
  return router
}
