import { Router } from 'express'
import { authRouter } from './user/index.js'

import { ensureLoggedIn } from 'connect-ensure-login'
import cors from 'cors'
import { doctorRoutes } from './Doctor/index.js'
import { clinicRoutes } from './clinic/index.js'

var router = Router()
// the module will return a function and pass params to routers
export function routers(params) {
  //homepage
  router.get('/', function (req, res) {
    res.render('user/login', { page: 'login' })
  })
  router.get('/newUser', function (req, res) {
    res.render('user/register', {
      page: 'registration',
    })
  })
  // auth users to the respective routing module.
  // We also pass down the params
  router.use('/user', authRouter(params))
  router.use('/doctor', doctorRoutes(params))
  router.use('/clinic', clinicRoutes(params))
  return router
}