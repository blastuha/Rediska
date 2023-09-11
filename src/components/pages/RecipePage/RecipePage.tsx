import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { ContentHeading } from '../../ui/ContentHeading'
import { NutritionFacts } from './NutritionFacts'
import { Ingredients } from './Ingredients/Ingredients'
import { RecipeSteps } from './RecipeSteps'

import { useFetchRecipesByIdQuery } from '../../../redux/recipes/recipesApi'

import { useAppSelector } from '../../../hooks/useAppSelector'
import { useIsRecipeInFavourites } from '../../../hooks/useIsRecipeInFavourites'
import { useFavouritesActions } from '../../../hooks/useFavouritesActions'

export const RecipePage: React.FC = () => {
  const { id } = useParams()
  const favouritesArr = useAppSelector((state) => state.recipes.favourites)
  const { data: recipe, isLoading } = useFetchRecipesByIdQuery(id)
  const isRecipeInFavourites = useIsRecipeInFavourites(recipe?.id, favouritesArr)
  const { addToFavourites, removeFromFavourites } = useFavouritesActions()

  console.log('favouritesArr', favouritesArr)

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <ContentHeading
        recipe={recipe}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        isRecipeInFavourites={isRecipeInFavourites}
      />
      <p className='pb-6 text-lg'>{recipe?.paragraph}</p>
      <img src={recipe?.photoURL} alt='recieptPhoto' className='mb-8 rounded-lg' />
      <div className='flex justify-between'>
        <div className='flex w-3/6 max-w-lg flex-col pr-10'>
          <Ingredients reciept={recipe} margins='mb-10' />
          <NutritionFacts reciept={recipe} />
        </div>
        <div className='flex w-3/5 flex-col'>
          <RecipeSteps reciept={recipe} />
        </div>
      </div>
    </main>
  )
}
