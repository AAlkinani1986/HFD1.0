import { Router } from 'express'
import { profile } from './profile.js'
import { recipes } from './recipes.js'
import { planFood } from './planFood.js'
import { registration } from './registration.js'
import { food } from './food.js'
import { booking } from './booking.js'
import { startChat } from './startChat.js'
const router = Router()
export function patientRoutes(params) {
  router.use(registration(params))
  router.use(profile(params))
  router.use(recipes(params))
  router.use(planFood(params))
  router.use(food(params))
  router.use(booking(params))
  router.use(startChat(params))
  return router
}
