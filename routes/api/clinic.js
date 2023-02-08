import { Router } from 'express'
import { ClinicController } from '../../controllers/ClinicController.js'

const router = Router()
export function clinicRoutes() {
  router.get('/clinicsName', async (req, res, next) => {
    try {
      const clinics = ClinicController.getClinicsName()
      return clinics
    } catch (error) {
      return error
    }
  })
  return router
}
