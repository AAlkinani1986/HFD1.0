import axios from 'axios'

export class FoodServices {
  static async findFood(name) {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${name}&pageSize=3&api_key=${process.env.FDCAPIKey}`,
      )
      return response.data.foods.map((food) => {
        return food
      })
    } catch (error) {
      return error
    }
  }
}
