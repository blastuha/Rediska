import { useEffect, useState } from 'react'
import { useFetchFavouritesCounterQuery } from '../redux/recipes/recipesApi'

export const useFavouritesCounter = (recipeId) => {
  const { data: favouritesCounterArr } = useFetchFavouritesCounterQuery(undefined)
  const [favouritesCounter, setFavouritesCounter] = useState(0)

  console.log('favouritesCounterArr', favouritesCounterArr)
  console.log('recipeId', recipeId)

  useEffect(() => {
    if (favouritesCounterArr) {
      const count = favouritesCounterArr.filter((recipe) => recipe.recipeId === recipeId).length
      console.log('count', count)
      setFavouritesCounter(count)
    }
  }, [favouritesCounterArr, recipeId])

  return favouritesCounter
}
