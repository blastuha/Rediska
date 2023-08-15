import React from 'react'

import { Carousel } from './Carousel.tsx'

import { RecipeSection } from './RecipeSection.tsx'
import { MostPopularCard } from './MostPopularCard.tsx'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi.ts'

import { RecipeData } from '../../../models/'

export const RecipesPage: React.FC = () => {
  const { data: recipesData = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)

  return (
    <div className='container mx-auto flex-grow'>
      <Carousel blockStyles='relative mb-10 mt-0' />
      <RecipeSection>
        <>
          <ul className='col-span-2 grid grid-cols-2 gap-6'>
            {recipesData.map((recipe: RecipeData) => {
              return <MostPopularCard {...recipe} key={recipe.id} />
            })}
          </ul>
          <h2 className='col-start-3 col-end-3'>Рекламный блок</h2>
        </>
      </RecipeSection>
    </div>
  )
}
