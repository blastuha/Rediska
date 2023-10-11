import { RecipeFavObj } from '../models'

export const countFavouritesById = (recipeId: string, favouritesArr: RecipeFavObj[]) => {
  return favouritesArr.filter((fav) => fav.recipeId === recipeId).length
}
