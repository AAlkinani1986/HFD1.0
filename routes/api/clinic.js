import { Router } from 'express'
import { ClinicController } from '../../controllers/ClinicController.js'

const router = Router()
export function clinicRoutes() {
  router.get('/clinicsName', async (req, res, next) => {
    try {
      const clinicsName = await ClinicController.getClinicsName()

      res.json(clinicsName)
    } catch (error) {
      return error
    }
  })
  router.get('/clinics', async (req, res) => {
    try {
      const clinics = await ClinicController.getFirstThree()
      return res.json(clinics)
    } catch (error) {
      return error
    }
  })
  return router
}
