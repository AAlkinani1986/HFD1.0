import mongoose from 'mongoose'

const RecipeSchema = mongoose.Schema({
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
export const Recipe = mongoose.model('recipe', RecipeSchema, 'recipes')
