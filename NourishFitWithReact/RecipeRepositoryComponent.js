import Recipe from './RecipeComponent';

class RecipeRepository {
  constructor() {
    this.recipes = [
      new Recipe(1, 'Pasta Carbonara', '500 calories', 'Step 1...'),
      new Recipe(2, 'Chicken Stir-Fry', '400 calories', 'Step 1...'),
      new Recipe(3, 'Vegetable Soup', '300 calories', 'Step 1...'),
      new Recipe(4, 'Grilled Salmon', '450 calories', 'Step 1...'),
    ];
  }

  getAllRecipes() {
    return this.recipes;
  }

  addRecipe(newRecipe) {
    this.recipes.push(newRecipe);
  }

  updateRecipe(id, updatedRecipe) {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
    }
  }

  deleteRecipe(id) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}

export default new RecipeRepository();
