import React, { useState, useEffect } from 'react'

import { Carousel } from './Carousel.tsx'

import { RecipeSection } from './RecipeSection.tsx'
import { MostPopularCard } from './MostPopularCard.tsx'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi.ts'

import { fetchReciepts } from '../../../api/fetchReciepts.ts'
import { RecieptsData } from '../../../models/'

export const Recipes: React.FC = () => {
  // const [reciepts, setReciepts] = useState<RecieptsData[]>([])
  const { data, error, isLoading } = useFetchRecipesQuery()

  console.log(data)

  console.log('isError', isError, error)

  // useEffect(() => {
  //   fetchReciepts()
  //     .then((res) => setReciepts(res as RecieptsData[]))
  //     .catch((err) => console.error('Ошибка получения рецептов', err))
  // }, [])

  return (
    <div className='container mx-auto flex-grow'>
      <Carousel blockStyles='relative mb-10 mt-0' />
      <RecipeSection>
        <>
          {/* <ul className='col-span-2 grid grid-cols-2 gap-6'>
            {reciepts.map((recipe) => {
              return <MostPopularCard {...recipe} />
            })}
          </ul> */}
          <h2 className='col-start-3 col-end-3'>Здесь может быть ваша реклама</h2>
        </>
      </RecipeSection>
    </div>
  )
}
