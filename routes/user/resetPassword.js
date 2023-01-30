import { Router } from 'express'

const router = Router()
export function resetPassword() {
  router.get('/resetPassword', (req, res) => {
    res.render('user/resetPassword', {
      page: 'Reset password',
    })
  })
  return router
}
