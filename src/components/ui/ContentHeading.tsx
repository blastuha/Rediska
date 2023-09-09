import React from 'react'

import { Date } from './Icons/Date'
import { Heart } from './Icons/Heart'
import { HeartFilled } from './Icons/HeartFilled'

import { RecipeData } from '../../models'

type ContentHeadingProps = {
  date?: string
  title?: string
  recipe?: RecipeData
  isRecipeInFavourites?: number | undefined
  addToFavourites: (item: RecipeData) => Promise<void>
  removeFromFavourites: (item: RecipeData) => Promise<void>
}

export const ContentHeading: React.FC<ContentHeadingProps> = ({
  addToFavourites,
  removeFromFavourites,
  recipe,
  isRecipeInFavourites,
}) => {
  console.log(isRecipeInFavourites)

  return (
    <div className='flex flex-col'>
      <h1 className='mb-6 font-playfair text-[50px] font-bold leading-none'>{recipe?.title}</h1>
      <div className='flex'>
        <div className='mr-6 flex'>
          <Date styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>{recipe?.date ? recipe?.date : ''}</span>
        </div>
        <div className='flex'>
          {isRecipeInFavourites !== undefined && isRecipeInFavourites >= 0 ? (
            <div onClick={recipe ? () => removeFromFavourites(recipe) : undefined}>
              <HeartFilled styles='w-6 h-6 mr-2 cursor-pointer' />
            </div>
          ) : (
            <div onClick={recipe ? () => addToFavourites(recipe) : undefined}>
              <Heart styles='w-6 h-6 mr-2 cursor-pointer' />
            </div>
          )}
          <span>2</span>
        </div>
      </div>
      <hr className='mb-4 mt-4 text-line-gray' />
    </div>
  )
}
