import { Router } from 'express'
import passport from 'passport'

const router = Router()

export function registrationRouter() {
  router.get('/newUser', function (req, res) {
    res.render('user/register', {
      page: 'registration',
    })
  })

  return router
}
