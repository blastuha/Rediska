import React from 'react'
import { toast } from 'react-toastify'

import { Date } from './Icons/Date'
import { Heart } from './Icons/Heart'
import { HeartFilled } from './Icons/HeartFilled'

import { useAuth } from '../../hooks/useAuth'

import { RecipeData, WeekPlot, WidgetNewsData } from '../../models'

type ContentHeadingProps = {
  date?: string
  title?: string
  isRecipeInFavourites?: number | undefined
  data?: RecipeData | WeekPlot | WidgetNewsData
  favouritesCounter?: number
  addToFavourites?: (item: RecipeData) => Promise<void>
  removeFromFavourites?: (item: RecipeData) => Promise<void>
}

export const ContentHeading: React.FC<ContentHeadingProps> = ({
  addToFavourites,
  removeFromFavourites,
  isRecipeInFavourites,
  data,
  date,
  favouritesCounter,
  title,
}) => {
  const { isAuth } = useAuth()

  const notify = () =>
    toast.error('Требуется авторизация!', {
      position: 'top-right',
      autoClose: 1100,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  return (
    <div className='flex flex-col'>
      <h1 className='mb-6 font-playfair font-bold leading-none xs:text-[2rem] md:text-[3rem]'>
        {title}
      </h1>
      <div className='flex'>
        <div className='mr-6 flex'>
          <Date styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>{date}</span>
        </div>
        {addToFavourites && (
          <div className='flex'>
            {typeof isRecipeInFavourites !== 'undefined' && isRecipeInFavourites >= 0 ? (
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
              <div onClick={data && isAuth ? () => addToFavourites(data as RecipeData) : notify}>
                <Heart styles='w-6 h-6 mr-2 cursor-pointer' />
              </div>
            )}
            <span>{favouritesCounter}</span>
          </div>
        )}
      </div>
      <hr className='mb-4 mt-4 text-line-gray' />
    </div>
  )
}
