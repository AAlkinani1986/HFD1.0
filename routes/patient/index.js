import { Router } from 'express'
import { profile } from './profile.js'
import { recipes } from './recipes.js'
import { registration } from './registration.js'

const router = Router()
export function patientRoutes(params) {
  router.use(registration(params))
  router.use(profile(params))
  router.use(recipes(params))
  return router
}
