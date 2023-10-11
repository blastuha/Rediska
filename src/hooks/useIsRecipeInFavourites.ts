import { useEffect, useState } from 'react'
import { isInFavourites } from '../helpers/isInFavourites'
import { RecipeData } from '../models'

export const useIsRecipeInFavourites = (
  id: string | undefined,
  favouritesArray: RecipeData[] | undefined,
) => {
  const [isInFavourite, setIsInFavourite] = useState<number | undefined>(-1)

  useEffect(() => {
    setIsInFavourite(isInFavourites(id, favouritesArray))
  }, [id, favouritesArray])

  return isInFavourite
}
