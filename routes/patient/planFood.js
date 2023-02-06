import { Router } from 'express'

const router = Router()

export function planFood() {
  router.get('/planFood', async (req, res, next) => {
    res.render('patient/planFood', {
      page: 'planFood',
      patient: req.session.patient,
    })
  })

  return router
}
