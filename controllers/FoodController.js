import axios from 'axios'

const API_URL = `https://api.nal.usda.gov/fdc/v1/food/search?api_key=${process.env.FDCAPIKey}`
export class FoodController {
  static findFood(foodName) {
    axios
      .get(`${API_URL}&query=${foodName}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send('An error occurred')
      })
  }
}
