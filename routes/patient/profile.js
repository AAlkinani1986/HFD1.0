import { Router } from 'express'
import { patientController } from '../../controllers/patientController.js'
const router = Router()
export function profile() {
  router.get('/profile', async (req, res, next) => {
    const patient = await patientController.findOne(req.session.user._id)

    res.render('patient/profile', {
      page: 'Profile',
      patient: patient,
    })
  })
  return router
}
