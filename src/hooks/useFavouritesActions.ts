import { useState, useEffect } from 'react'
import { useAddRecipeMutation } from '../redux/recipes/recipesApi'
import { useRemoveRecipeMutation } from '../redux/recipes/recipesApi'
import { useAddRecipeToCounterMutation } from '../redux/recipes/recipesApi'
import { useRemoveRecipeFromCounterMutation } from '../redux/recipes/recipesApi'

import { getAuth } from 'firebase/auth'

import { useActions } from './useActions'

import { RecipeData } from '../models'

export const useFavouritesActions = (favouritesCounter?: number) => {
  favouritesCounter = favouritesCounter || 0
  const [addRecipeToFav] = useAddRecipeMutation()
  const { addToFavourite, removeFromFavourite } = useActions()
  const [addToRecipeCounter] = useAddRecipeToCounterMutation()
  const [removeRecipeFromFav] = useRemoveRecipeMutation()
  const [removeRecipeCounter] = useRemoveRecipeFromCounterMutation()
  const [optimisticFavouritesCounter, setOptimisticFavouritesCounter] =
    useState<number>(favouritesCounter)

  const currentUserId = getAuth().currentUser?.uid

  useEffect(() => {
    setOptimisticFavouritesCounter(favouritesCounter || 0)
  }, [favouritesCounter])

  const addToFavourites = async (recipe: RecipeData) => {
    if (currentUserId) {
      addToFavourite(recipe)
      setOptimisticFavouritesCounter((prev) => prev + 1)
      try {
        await addRecipeToFav(recipe)
        await addToRecipeCounter({ userId: currentUserId, recipeId: recipe.id })
      } catch (err) {
        console.error('Ошибка добавления в избранное', err)
        removeFromFavourite(recipe)
        setOptimisticFavouritesCounter((prev) => prev - 1)
      }
    }
  }

  const removeFromFavourites = async (recipe: RecipeData) => {
    if (currentUserId) {
      removeFromFavourite(recipe)
      if (optimisticFavouritesCounter > 0) {
        setOptimisticFavouritesCounter((prev) => prev - 1)
      }
      try {
        await removeRecipeFromFav(recipe)
        await removeRecipeCounter({ userId: currentUserId, recipeId: recipe.id })
      } catch (err) {
        console.error('Ошибка удаления из избранных', err)
        addToFavourite(recipe)
        setOptimisticFavouritesCounter((prev) => prev + 1)
      }
    }
  }

  return { addToFavourites, removeFromFavourites, optimisticFavouritesCounter }
}
