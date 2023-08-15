import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContentHeading } from '../../ui/ContentHeading'

import { NutritionFacts } from './NutritionFacts'
import { Ingredients } from './Ingredients/Ingredients'
import { RecipeSteps } from './RecipeSteps'

import { useFetchRecipesByIdQuery } from '../../../redux/recipes/recipesApi'

export const RecipePage: React.FC = () => {
  const { id } = useParams()
  const { data: reciept, isLoading } = useFetchRecipesByIdQuery(id)

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <ContentHeading title={reciept?.title} />
      <p className='pb-6 text-lg'>{reciept?.paragraph}</p>
      <img src={reciept?.photoURL} alt='recieptPhoto' className='mb-8 rounded-lg' />
      <div className='flex justify-between'>
        <div className='flex w-3/6 max-w-lg flex-col pr-10'>
          <Ingredients reciept={reciept} margins='mb-10' />
          <NutritionFacts reciept={reciept} />
        </div>
        <div className='flex w-3/5 flex-col'>
          <RecipeSteps reciept={reciept} />
        </div>
      </div>
    </main>
  )
}
