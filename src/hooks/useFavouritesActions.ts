import { useAddRecipeMutation } from '../redux/recipes/recipesApi'
import { useRemoveRecipeMutation } from '../redux/recipes/recipesApi'
import { useAddRecipeToCounterMutation } from '../redux/recipes/recipesApi'
import { useRemoveRecipeFromCounterMutation } from '../redux/recipes/recipesApi'

import { getAuth } from 'firebase/auth'

import { useActions } from './useActions'

import { RecipeData } from '../models'

export const useFavouritesActions = () => {
  const [addRecipeToFav] = useAddRecipeMutation()
  const [removeRecipeFromFav] = useRemoveRecipeMutation()
  const { addToFavourite, removeFromFavourite } = useActions()
  const [addToRecipeCounter] = useAddRecipeToCounterMutation()
  const [removeRecipeCounter] = useRemoveRecipeFromCounterMutation()

  const currentUserId = getAuth().currentUser?.uid

  const addToFavourites = async (recipe: RecipeData) => {
    if (currentUserId) {
      addToFavourite(recipe)
      try {
        await addRecipeToFav(recipe)
        await addToRecipeCounter({ userId: currentUserId, recipeId: recipe.id })
      } catch (err) {
        console.error('Ошибка добавления в избранное', err)
        removeFromFavourite(recipe)
      }
    }
  }

  const removeFromFavourites = async (recipe: RecipeData) => {
    removeFromFavourite(recipe)
    try {
      await removeRecipeFromFav(recipe)
      await removeRecipeCounter({ userId: currentUserId, recipeId: recipe.id })
    } catch (err) {
      console.error('Ошибка удаления из избранных', err)
      addToFavourite(recipe)
    }
  }

  return { addToFavourites, removeFromFavourites }
}
