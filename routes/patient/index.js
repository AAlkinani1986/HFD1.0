import { Router } from 'express'
import { profile } from './profile.js'
import { recipes } from './recipes.js'
import { planFood } from './planFood.js'
import { registration } from './registration.js'

const router = Router()
export function patientRoutes(params) {
  router.use(registration(params))
  router.use(profile(params))
  router.use(recipes(params))
  router.use(planFood(params))
  return router
}
