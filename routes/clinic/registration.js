import { Router } from 'express'
import passport from 'passport'

const router = Router()

export function registrationClinic() {
  router.get('/registration', function (req, res) {
    res.render('clinic/registration', {
      page: 'new clinic',
    })
  })

  return router
}
