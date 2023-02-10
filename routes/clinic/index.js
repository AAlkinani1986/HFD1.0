import { Router } from 'express'
import { profileupdate } from './profileupdate.js'
import { registrationClinic } from './registration.js'
import { Profile } from './profile.js'
import { startChat } from './startChat.js'

const router = Router()
export function clinicRoutes(params) {
  router.use(registrationClinic(params))
  router.use(Profile(params))
  router.use(profileupdate(params))
  router.use(startChat(params))
  return router
}
