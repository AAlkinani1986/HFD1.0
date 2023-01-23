import { Router } from 'express'
const router = Router()
export function registration() {
  router.get('/registration', function (req, res) {
    res.render('patient/registration', {
      page: 'Registration',
    })
  })
  return router
}
