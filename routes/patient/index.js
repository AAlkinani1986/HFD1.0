import { Router } from 'express'
import { registration } from './registration.js'

const router = Router()
export function patientRoutes(params) {
  router.use(registration(params))

  return router
}
