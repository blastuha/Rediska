import { useAddRecipeMutation } from '../redux/recipes/recipesApi'
import { useRemoveRecipeMutation } from '../redux/recipes/recipesApi'
import { useActions } from './useActions'
import { RecipeData } from '../models'

export const useFavouritesActions = () => {
  const [addRecipeToFav] = useAddRecipeMutation()
  const [removeRecipeFromFav] = useRemoveRecipeMutation()
  const { addToFavourite, removeFromFavourite } = useActions()

  const addToFavourites = async (recipe: RecipeData) => {
    addToFavourite(recipe)
    try {
      await addRecipeToFav(recipe)
    } catch (err) {
      console.error('Ошибка добавления в избранное', err)
      removeFromFavourite(recipe)
    }
  }

  const removeFromFavourites = async (recipe: RecipeData) => {
    removeFromFavourite(recipe)
    try {
      await removeRecipeFromFav(recipe)
    } catch (err) {
      console.error('Ошибка удаления из избранных', err)
      addToFavourite(recipe)
    }
  }

  return { addToFavourites, removeFromFavourites }
}
