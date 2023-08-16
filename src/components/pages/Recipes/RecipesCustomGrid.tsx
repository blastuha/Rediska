import React from 'react'
import { RecipeData } from '../../../models/'

type RecipesGridProps = {
  recipesData: RecipeData[]
  gridStyles: string
  cardsQuantity: number
  adBlock?: React.ReactElement
  card: React.ReactElement
  firstCardStyles?: string
}

export const RecipesCustomGrid: React.FC<RecipesGridProps> = ({
  recipesData,
  gridStyles,
  adBlock,
  cardsQuantity,
  card,
  firstCardStyles,
}) => {
  const firstCardStylesFunc = (index: number) => {
    return index === 0 ? firstCardStyles : null
  }
  return (
    <>
      <ul className={gridStyles}>
        {recipesData.map((recipe: RecipeData, i) => {
          if (i <= cardsQuantity) {
            return React.cloneElement(card, { ...recipe, firstCardStyles: firstCardStylesFunc(i) })
          } else {
            return null
          }
        })}
      </ul>
      {adBlock}
    </>
  )
}
