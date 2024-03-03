import React, {createContext, useEffect, useState} from 'react';
import RecipeRepository from './RecipeRepositoryComponent';

const RecipeContext = createContext();

const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState(RecipeRepository.getAllRecipes());

  const [recipesVersion, setRecipesVersion] = useState(0);

  useEffect(() => {
    // This will be triggered whenever the recipes change , does it after rendering
    setRecipesVersion(prevVersion => prevVersion + 1);
  }, [recipes]);
  const addRecipe = newRecipe => {
    RecipeRepository.addRecipe(newRecipe);
    setRecipes(RecipeRepository.getAllRecipes());
  };

  const updateRecipe = (id, updatedRecipe) => {
    RecipeRepository.updateRecipe(id, updatedRecipe);
    setRecipes([...RecipeRepository.getAllRecipes()]);
  };

  const deleteRecipe = id => {
    RecipeRepository.deleteRecipe(id);
    setRecipes(RecipeRepository.getAllRecipes());
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        addRecipe,
        updateRecipe,
        deleteRecipe,
      }}>
      {children}
    </RecipeContext.Provider>
  );
};

export {RecipeContext, RecipeProvider};
