import React from 'react'

import { Date } from './Icons/Date'
import { Heart } from './Icons/Heart'

import { RecipeData } from '../../models'

type ContentHeadingProps = {
  date?: string
  title?: string
  recipe?: RecipeData
  addToFavourites?: (item: RecipeData) => Promise<void>
  removeFromFavourites?: (item: RecipeData) => Promise<void>
}

export const ContentHeading: React.FC<ContentHeadingProps> = ({
  date,
  title,
  addToFavourites,
  removeFromFavourites,
  recipe,
}) => {
  const isInFavourites = () => {}

  return (
    <div className='flex flex-col'>
      <h1 className='mb-6 font-playfair text-[50px] font-bold leading-none'>{title}</h1>
      <div className='flex'>
        <div className='mr-6 flex'>
          <Date styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>{date ? date : ''}</span>
        </div>
        <div
          className='flex'
          onClick={addToFavourites && recipe ? () => addToFavourites(recipe) : undefined}
        >
          <Heart styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>IN FAV</span>
          <span>2 Likes</span>
        </div>
      </div>
      <hr className='mb-4 mt-4' />
    </div>
  )
}
