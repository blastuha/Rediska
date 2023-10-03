import { useEffect, useState } from 'react'
import { useFetchRecipesInFavouriteQuery } from '../redux/recipes/recipesApi'

export const useFavouritesCounter = (recipeId: string | undefined) => {
  const { data: favouritesCounterArr } = useFetchRecipesInFavouriteQuery(undefined)
  const [favouritesCounter, setFavouritesCounter] = useState(0)

  useEffect(() => {
    if (favouritesCounterArr) {
      const count = favouritesCounterArr.filter((recipe) => recipe.recipeId === recipeId).length
      setFavouritesCounter(count)
    }
  }, [favouritesCounterArr, recipeId])

  return favouritesCounter
}
