import { RecipeData } from '../models'

// Функция для фильтрации рецептов по ключевым словам
export const filterRecipesByKeywords = (recipes: RecipeData[], keywords: string[] = []) => {
  return keywords.length
    ? recipes.filter((recipe) =>
        keywords.some((keyword) => recipe.title.toLowerCase().includes(keyword.toLowerCase())),
      )
    : recipes
}
