import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from './Carousel.tsx'
import { Lines } from '../../ui/Lines.tsx'

import { fetchReciepts } from '../../../api/fetchReciepts.ts'

import { RecieptsData } from '../../../models/'

export const Recipes: React.FC = () => {
  const [reciepts, setReciepts] = useState<RecieptsData[]>([])

  useEffect(() => {
    fetchReciepts()
      .then((res) => setReciepts(res as RecieptsData[]))
      .catch((err) => console.error('Ошибка получения рецептов', err))
  }, [])

  return (
    <div className='container mx-auto flex-grow'>
      <div className='relative mb-10 mt-0'>
        <Carousel />
      </div>

      <section className='grid h-fit grid-cols-3 gap-6'>
        <div className='col-span-3 row-span-1'>
          <h2 className='w-fit overflow-hidden whitespace-nowrap font-playfair text-[50px]'>
            MOST POPULAR
            <Lines firstLineHeight='h-[2px]' />
          </h2>
          <span className='font-raleway text-2xl leading-loose'>Must try dishes.</span>
        </div>

        <ul className='col-span-2 grid grid-cols-2 gap-6'>
          {reciepts.map((recipe) => {
            return (
              // <Link to={`/reciept/${recipe.id}`} key={recipe.id}>
              <div className='flex'>
                <div className='group card w-96 cursor-pointer  rounded-lg bg-base-100'>
                  <figure>
                    <img
                      src={recipe.photoURL}
                      alt='picture'
                      className='transform rounded-lg transition-transform duration-1000 group-hover:scale-110'
                    />
                  </figure>
                  <div className='pb-4 pt-4'>
                    <h2 className='card-title font-normal text-base-content transition-colors duration-1000 group-hover:underline'>
                      {recipe.title}
                    </h2>
                  </div>
                </div>
              </div>
              // </Link>
            )
          })}
        </ul>

        <div className='col-start-3 col-end-3'>Здесь может быть ваша реклама</div>
      </section>
    </div>
  )
}
