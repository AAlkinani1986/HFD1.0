import { Router } from 'express'
import { patientController } from '../../controllers/patientController.js'
const router = Router()

export function food() {
  router.get('/food', async (req, res, next) => {
    const patient = await patientController.findOne(req.session.user._id)

    res.render('patient/food', {
      page: 'Food',
      patient: patient,
    })
  })

  return router
}
