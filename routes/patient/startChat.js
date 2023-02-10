import { Router } from 'express'

const router = Router()
export function startChat() {
  router.get('/startChat', (req, res) => {
    const user = req.session.user

    return res.render('patient/chat', {
      page: 'Profile',
      patient: req.session.patient,
      user: user,
    })
  })
  return router
}
