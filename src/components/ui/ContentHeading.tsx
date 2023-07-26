import React from 'react'
import { Date } from './Icons/Date'
import { Heart } from './Icons/Heart'

type ContentHeading = {
  date?: string
  title?: string
}

export const PageHeader: React.FC<ContentHeading> = ({ date, title }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-6 font-playfair text-[50px] font-bold leading-none'>{title}</h1>
      <div className='flex'>
        <div className='mr-6 flex'>
          <Date styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>{date}</span>
        </div>
        <div className='flex'>
          <Heart styles='w-6 h-6 mr-2 cursor-pointer' />
          <span>2 Likes</span>
        </div>
      </div>
      <hr className='mb-4 mt-4' />
    </div>
  )
}
