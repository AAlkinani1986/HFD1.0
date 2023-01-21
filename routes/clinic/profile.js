import { Router } from 'express'
import passport from 'passport'

const router = Router()

export function Profile() {
  router.get('/profile', function (req, res) {
    res.render('clinic/profile', {
      page: 'new profile',
    })
  })

  return router
}
