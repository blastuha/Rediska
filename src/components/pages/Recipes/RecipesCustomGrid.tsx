import React from 'react'
import { RecipeData } from '../../../models/'

type RecipesGridProps = {
  recipesData: RecipeData[]
  gridStyles: string
  cardsQuantity: number
  adBlock?: React.ReactElement
  card: React.ReactElement
  firstCardStyles?: string
  filterWordsArr?: string[]
}

export const RecipesCustomGrid: React.FC<RecipesGridProps> = ({
  recipesData,
  gridStyles,
  adBlock,
  cardsQuantity,
  card,
  firstCardStyles,
  filterWordsArr,
}) => {
  const firstCardStylesFunc = (index: number) => {
    return index === 0 ? firstCardStyles : null
  }

  // Проверяем, содержит ли заголовок рецепта хотя бы одно из слов из массива words
  //* вынести в хелпер
  const filteredRecipes = recipesData.filter((recipe) => {
    if (filterWordsArr) {
      return filterWordsArr?.some((word) => recipe.title.toLowerCase().includes(word))
    } else {
      return true
    }
  })

  return (
    <>
      <ul className={gridStyles}>
        {filteredRecipes.map((recipe: RecipeData, i) => {
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
      {adBlock}
    </>
  )
}
