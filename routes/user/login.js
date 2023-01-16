import { Router } from 'express'
import passport from 'passport'
const router = Router()

export function loginRouter(params) {
  router.get('/login', function (req, res) {
    res.render('user/login', { page: 'login' })
  })
  return router
}
