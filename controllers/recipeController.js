import { Recipe, recipe } from '../models/recipesModel'

export class recipeController {
  static async findAll() {
    try {
      return recipe.findAll().exec()
    } catch (error) {
      return error
    }
  }
    /**
    * Creating a new Recipe
    *
    * @param {recipeName} recipeName;
    * @param {ingredients} ingredients;
    * @param {calories} calories;
    *  @param {dailyValue} dailyValue;
    */
    static async createRecipe(
     recipeName,
     ingredients,
     calories,
     dailyValue,
   ) {
     try {
       const recipe = new Recipe();
       recipe.recipeName = recipeName;
       recipe.ingredients = ingredients;
       recipe.calories = calories;
       recipe.dailyValue = dailyValue;
       const savedRecipe = await recipe.save();
       return savedRecipe;
     } catch (error) {
       return error;
     }
   }
   static async updateRecipe(
     recipeName,
     ingredients,
     calories,
     dailyValue,
   ) {
     try {
       await Recipe.findOneAndUpdate(
         { recipeName: recipeName },
         {
           $set: {
            recipeName,
            ingredients,
            calories,
            dailyValue,
           },
         }
       );
       return true;
     } catch (error) {
       return error;
     }
   }
 
   /**
    * Finding by name
    * @param {*} name
    * @returns
    */
   static async findByName(name) {
     try {
       return Recipe.findByName(name).exec();
     } catch (error) {
       return error;
     }
   }
 
   static async findOne(Name) {
     try {
       return Recipe.findOne({ recipeName: this.name }).exec();
     } catch (error) {
       return error;
     }
   }
 
   /**
    *
    * @param {*} name
    * @returns a user
    */
   static async getResetToken(recipeName) {
     try {
       return ResetTokenModel.findOne({ recipeName }).exec();
     } catch (error) {
       return error;
     }
   }
   /**
    * getting all Recipe
    *
    * @returns a list of users
    */
   static async getRecipes() {
     return Recipe.find().sort({ createdAt: -1 }).exec();
   }
 }
 
