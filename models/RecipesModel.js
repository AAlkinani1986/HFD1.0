import mongoose from 'mongoose'

const RecipesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  dailyValue: {
    type: Number,
    required: true,
  },
})
export const recipe = mongoose.model('recipe', RecipesSchema, 'recipes')
