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

import { useAppSelector } from '../../../hooks/useAppSelector'
import { useActions } from '../../../hooks/useActions'
import { useFavourites } from '../../../hooks/useFavourites'
import { useIsRecipeInFavourites } from '../../../hooks/useIsRecipeInFavourites'

import { isInFavourites } from '../../../helpers/isInFavourites'
import { getFavourites } from '../../../api/getFavourites'

import { RecipeData } from '../../../models'

export const RecipePage: React.FC = () => {
  const [favouritesLocal, setFavouritesLocal] = useState([])
  const favourites = useAppSelector((state) => state.recipes.favourites)
  const { addToFavourite, removeFromFavourite, setFavourites } = useActions()

  const { id } = useParams()

  const { data: recipe, isLoading } = useFetchRecipesByIdQuery(id)
  // const { data: favData } = useFetchFavouritesQuery(undefined)

  const isRecipeInFavourites = useIsRecipeInFavourites(recipe?.id, favouritesLocal)

  const user = auth.currentUser

  console.log('favouritesLocal', favouritesLocal)

  //обновление данных в firebase
  const addToFavourites = async (item: RecipeData) => {
    setFavouritesLocal((prevState) => [...prevState, recipe])
    if (user) {
      const ref = doc(db, 'users', user.uid)
      const userSnapshot = await getDoc(ref)

      if (userSnapshot.exists()) {
        await updateDoc(ref, { favourites: arrayUnion(item) })
      } else {
        await setDoc(ref, { favourites: [item] })
      }
    }
    // addToFavourite(recipe)
    // setFavourites(await getFavourites())
  }

  //обновление данных в firebase
  const removeFromFavourites = async (item: RecipeData) => {
    setFavouritesLocal(favouritesLocal.filter((item) => item.id !== recipe?.id))
    if (user && item) {
      const ref = doc(db, 'users', user.uid)
      const userSnapshot = await getDoc(ref)

      if (userSnapshot.exists()) {
        await updateDoc(ref, { favourites: arrayRemove(item) })
      }
    }
    setFavourites(await getFavourites())
    // removeFromFavourite(recipe)
    console.log('removed from fav', favourites)
  }

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
