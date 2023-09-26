import React from 'react'
import { useFetchRecipesInFavouriteQuery } from '../../../redux/recipes/recipesApi'
import { filterRecipesByKeywords, countFavouritesById } from '../../../helpers/'
import { RecipeData } from '../../../models/'

type RecipesGridProps = {
  recipesData: RecipeData[]
  gridStyles: string
  cardsQuantity: number
  card: React.ReactElement
  firstCardStyles?: string
  filterWordsArr?: string[]
  sort?: string
}

export const RecipesCustomGrid: React.FC<RecipesGridProps> = ({
  recipesData,
  gridStyles,
  cardsQuantity,
  card,
  firstCardStyles,
  filterWordsArr,
  sort,
}) => {
  const { data: favouritesData = [] } = useFetchRecipesInFavouriteQuery(null)
  const filteredRecipes = filterRecipesByKeywords(recipesData, filterWordsArr)

  const firstCardStylesFunc = (index: number) => {
    return index === 0 ? firstCardStyles : null
  }

  const filtredSortedArr =
    sort === 'mostPopular'
      ? [...filteredRecipes]?.sort(
          (a, b) =>
            countFavouritesById(b.id, favouritesData) - countFavouritesById(a.id, favouritesData),
        )
      : filteredRecipes

  return (
    <>
      <ul className={gridStyles}>
        {filtredSortedArr.map((recipe: RecipeData, i) => {
          if (i <= cardsQuantity) {
            return React.cloneElement(card, {
              key: i,
              ...recipe,
              recipe,
              firstCardStyles: firstCardStylesFunc(i),
            })
          } else {
            return null
          }
        })}
      </ul>
    </>
  )
}
