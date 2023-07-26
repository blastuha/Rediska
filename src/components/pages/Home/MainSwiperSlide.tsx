import React from 'react'
import { ArrowButton } from './ArrowButton'
import { NewsData } from '../../models'

export const MainSwiperSlide: React.FC<NewsData> = ({
  title,
  photoURL,
  smallText,
}) => {
  return (
    <div className='flex max-w-full rounded-xl bg-[#E4F1FF]'>
      <div className='w-3/5 card w-100 bg-base-100 shadow-xl'>
        <img
          src={photoURL}
          alt='Shoes'
          className='rounded-l-xl'
        />
      </div>
      <div className='flex flex-col h w-2/5 p-10 relative  max-h-[388px]'>
        <h1 className='text-3xl max-h-2/3 mb-6 font-playfair font-extrabold line-clamp-4'>
          {title}
        </h1>
        <p className='font-medium max-h-1/3 line-clamp-5'>{smallText}</p>
        <div className='absolute right-10 bottom-4'>
          <ArrowButton />
        </div>
      </div>
    </div>
  )
}
