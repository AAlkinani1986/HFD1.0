import { recipe } from '../models/recipesModel'

export class recipeController {
  static async findAll() {
    try {
      return recipe.findAll().exec()
    } catch (error) {
      return error
    }
  }
}
