import { Router } from 'express'
import { clinicRoutes } from './clinic.js'
import { doctor } from './doctor.js'

const router = Router()
export function apiRouters(params) {
  router.use(clinicRoutes(params))
  router.use(doctor(params))
  return router
}
