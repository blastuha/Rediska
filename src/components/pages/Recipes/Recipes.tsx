import React from 'react'
import { Carousel } from './Carousel.tsx'

export const Recipes: React.FC = () => {
  return (
    <div className='container mx-auto flex-grow'>
      <h1 className='pb-4 pt-4 font-playfair text-[50px] font-bold leading-none'>Все рецепты</h1>
      <hr />
      <div className='relative'>
        <Carousel />
      </div>
    </div>
  )
}
