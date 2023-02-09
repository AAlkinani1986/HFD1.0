import { Router } from 'express'
import { doctorController } from '../../controllers/doctorController.js'

const router = Router()
export function doctor() {
  router.get('/doctors/:clinicName', async (req, res) => {
    try {
      const doctors = await doctorController.getFirstThree(
        req.params.clinicName,
      )

      return res.json(doctors)
    } catch (error) {
      return error
    }
  })
  return router
}
