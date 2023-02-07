import { Router } from 'express'
import { FoodServices } from '../../public/services/FoodService.js'
import axios from 'axios'
const router = Router()

export function food() {
  router.get('/food', (req, res) => {
    res.render('patient/food', {
      page: 'Food',
      patient: req.session.patient,
      productsList: null,
    })
  })
  router.post('/food', async (req, res) => {
    const products = await FoodServices.findFood(req.body.foodName)

    if (products.length === 0) {
      req.session.messages.push({
        text: `No nutrition found for ${req.body.foodName}, please make sure you  entering the right name  `,
        type: 'info',
      })
      return res.render('patient/food', {
        page: 'Food',
        patient: req.session.patient,
        productsList: products,
      })
    }
    return res.render('patient/food', {
      page: 'Food',
      patient: req.session.patient,
      productsList: products,
    })
  })
  return router
}
