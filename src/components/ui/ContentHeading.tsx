import React from 'react'

import { Date } from './Icons/Date'
import { Heart } from './Icons/Heart'
import { HeartFilled } from './Icons/HeartFilled'

import { RecipeData, WeekPlot, WidgetNewsData } from '../../models'

type ContentHeadingProps = {
  date?: string
  title?: string
  isRecipeInFavourites?: number | undefined
  data?: RecipeData | WeekPlot | WidgetNewsData
  addToFavourites?: (item: RecipeData) => Promise<void>
  removeFromFavourites?: (item: RecipeData) => Promise<void>
}

export const ContentHeading: React.FC<ContentHeadingProps> = ({
  addToFavourites,
  removeFromFavourites,
  isRecipeInFavourites,
  data,
  favouritesCounter,
}) => {
  console.log('isRecipeInFavourites', isRecipeInFavourites)

  return (
    <div className='flex flex-col'>
      <h1 className='mb-6 font-playfair text-[50px] font-bold leading-none'>{data?.title}</h1>
      <div className='flex'>
        <div className='mr-6 flex'>
          <Date styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>{data?.date}</span>
        </div>
        {addToFavourites && (
          <div className='flex'>
            {isRecipeInFavourites && isRecipeInFavourites >= 0 ? (
              <div
                onClick={
                  data && removeFromFavourites
                    ? () => removeFromFavourites(data as RecipeData)
                    : undefined
                }
              >
                <HeartFilled styles='w-6 h-6 mr-2 cursor-pointer' />
              </div>
            ) : (
              <div
                onClick={
                  data && addToFavourites ? () => addToFavourites(data as RecipeData) : undefined
                }
              >
                <Heart styles='w-6 h-6 mr-2 cursor-pointer' />
              </div>
            )}
            <span>{favouritesCounter} </span>
          </div>
        )}
      </div>
      <hr className='mb-4 mt-4 text-line-gray' />
    </div>
  )
}
