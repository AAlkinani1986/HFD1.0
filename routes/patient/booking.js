import { Router } from 'express'

const router = Router()

export function booking() {
  router.get('/booking', (req, res) => {
    return res.render('patient/booking', {
      page: 'booking',
      patient: req.session.patient,
    })
  })
  return router
}
