import { Router } from 'express'
import { patientController } from '../../controllers/patientController.js'
const router = Router()

export function recipes() {
  router.get('/recipes', async (req, res, next) => {
    const patient = await patientController.findOne(req.session.user._id)

    res.render('patient/recipes', {
      page: 'Recipes',
      patient: patient,
    })
  })

  return router
}
