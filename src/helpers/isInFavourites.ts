import { RecipeData } from '../models'

export const isInFavourites = (
  id: string | undefined,
  favouritesArray: RecipeData[] | undefined,
) => {
  return favouritesArray?.findIndex((item) => item.id === id)
}
