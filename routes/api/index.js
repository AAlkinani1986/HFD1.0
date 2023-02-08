import { Router } from 'express'
import { clinicRoutes } from './clinic.js'

const router = Router()
export function apiRouters(params) {
  router.use(clinicRoutes(params))
  return router
}
