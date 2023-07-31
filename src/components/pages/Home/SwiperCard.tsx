import React from 'react'
import { ArrowButton } from '../../ui/ArrowButton.tsx'
import { NewsData } from '../../../models'

export const SwiperCard: React.FC<NewsData> = ({ title, photoURL, smallText }) => {
  return (
    <div className='flex max-w-full rounded-lg bg-[#E4F1FF]'>
      <div className='w-100 card w-3/5 bg-base-100 shadow-xl'>
        <img src={photoURL} alt='Shoes' className='rounded-l-lg' />
      </div>
      <div className='h relative flex max-h-[388px] w-2/5 flex-col  p-10'>
        <h1 className='max-h-2/3 mb-6 line-clamp-4 font-playfair text-3xl font-extrabold'>
          {title}
        </h1>
        <p className='max-h-1/3 line-clamp-5 font-medium'>{smallText}</p>
        <div className='absolute bottom-4 right-10'>
          <ArrowButton />
        </div>
      </div>
    </div>
  )
}
