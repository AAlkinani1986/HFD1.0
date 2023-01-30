import { Router } from 'express'

const router = Router()

export function recipes() {
  router.get('/recipes', async (req, res, next) => {
    res.render('patient/recipes', {
      page: 'Recipes',
      patient: req.session.patient,
    })
  })

  return router
}
