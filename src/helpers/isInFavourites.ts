import { RecipeData } from '../models'

export const isInFavourites = (
  id: string | undefined,
  favouritesArray: RecipeData[] | undefined,
) => {
  if (favouritesArray) {
    return favouritesArray?.findIndex((item) => item.id === id)
  } else {
    return -1
  }
}
