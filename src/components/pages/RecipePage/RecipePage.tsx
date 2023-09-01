import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { setDoc, updateDoc, doc, arrayUnion, getDoc, arrayRemove } from 'firebase/firestore'

import { auth, db } from '../../../api/firebase'

import { ContentHeading } from '../../ui/ContentHeading'
import { NutritionFacts } from './NutritionFacts'
import { Ingredients } from './Ingredients/Ingredients'
import { RecipeSteps } from './RecipeSteps'

import {
  useFetchRecipesByIdQuery,
  useFetchFavouritesQuery,
} from '../../../redux/recipes/recipesApi'

import { RecipeData } from '../../../models'
import { Favourite } from '../../../models'

export const RecipePage: React.FC = () => {
  const { id } = useParams()
  const { data: recipe, isLoading } = useFetchRecipesByIdQuery(id)
  const { data: favourites } = useFetchFavouritesQuery(undefined)
  const user = auth.currentUser

  console.log('1', favourites)

  const addToFavourites = async (item: RecipeData) => {
    if (user) {
      const ref = doc(db, 'users', user.uid)
      const userSnapshot = await getDoc(ref)

      if (userSnapshot.exists()) {
        await updateDoc(ref, { favourites: arrayUnion(item) })
      } else {
        await setDoc(ref, { favourites: [item] })
      }
    }
  }

  const removeFromFavourites = async (item: RecipeData) => {
    if (user) {
      const ref = doc(db, 'users', user.uid)
      const userSnapshot = await getDoc(ref)

      if (userSnapshot.exists()) {
        await updateDoc(ref, { favourites: arrayRemove(item) })
      }
    }
  }

  // favourites?.forEach((item) => console.log('item', item))

  // const isInFavourites = (id: string | undefined) => {
  //   favourites?.find((item) => item.)
  // }

  // console.log(isInFavourites(recipe?.id))

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <ContentHeading
        recipe={recipe}
        title={recipe?.title}
        date={recipe?.date}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
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
