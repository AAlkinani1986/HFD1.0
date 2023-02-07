import { Router } from 'express'
import { FoodServices } from '../../public/services/FoodService.js'
import axios from 'axios'
const router = Router()

const API_URL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=3&api_key=al2VyeCMX25mu4B5Aut9JhGQV0oIczncrh61NzFW`
export function food() {
  router.get('/food', (req, res) => {
    res.render('patient/food', {
      page: 'Food',
      patient: req.session.patient,
    })
  })
  router.post('/food', async (req, res) => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(Array.isArray(response.data.foods))
        const products = response.data.foods.map((food) => {
          return food
        })

        return res.render('patient/food', {
          page: 'Food',
          patient: req.session.patient,
          productsList: products,
        })
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send('An error occurred')
      })
  })
  return router
}
