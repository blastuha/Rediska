import React from 'react'
import { ArrowButton } from '../../ui/ArrowButton.tsx'
import { WidgetNewsData } from '../../../models'

export const SwiperCard: React.FC<WidgetNewsData> = ({ title, photoURL, smallText, id }) => {
  return (
    <div className='flex h-full max-w-full rounded-lg bg-light-blue s:flex-col lg:flex-row'>
      <div className='card bg-base-100 shadow-xl s:w-full lg:w-3/5'>
        <img
          src={photoURL}
          alt='Shoes'
          className='h-full w-full object-cover s:rounded-bl-lg s:rounded-tl-lg s:rounded-tr-lg lg:rounded-tr-none'
        />
      </div>

      <div className='relative flex max-h-[388px] min-h-full flex-col items-stretch  p-10 s:w-full  lg:w-2/5'>
        <h1 className='max-h-2/3  mb-6 line-clamp-4 font-playfair text-3xl font-extrabold'>
          {title}
        </h1>
        <p className='max-h-1/3 line-clamp-5 font-medium'>{smallText}</p>
        <div className='absolute bottom-3 right-6'>
          <ArrowButton id={id} />
        </div>
      </div>
    </div>
  )
}
