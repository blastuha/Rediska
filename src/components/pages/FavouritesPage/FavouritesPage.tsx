import React from 'react'
import { Link } from 'react-router-dom'

import { RecipesCustomGrid } from '../Recipes/RecipesCustomGrid'
import { FavouritesCard } from './FavouritesCard'

import { useAppSelector } from '../../../hooks/useAppSelector'
import { useFavouritesActions } from '../../../hooks/useFavouritesActions'

export const FavouritesPage: React.FC = () => {
  const favouritesArr = useAppSelector((state) => state.recipes.favourites)
  const { removeFromFavourites } = useFavouritesActions()

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <div className='align-center mb-8 flex justify-center'>
        <h3 className='font-playfair text-4xl text-dark-blue'>МОИ РЕЦЕПТЫ</h3>
      </div>
      {favouritesArr.length > 0 && (
        <div className='mb-8'>
          <h3 className='font-playfair text-3xl text-dark-blue'>All ({favouritesArr.length})</h3>
        </div>
      )}

      {favouritesArr.length === 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <h3 className=' mb-12 font-playfair text-2xl text-dark-blue'>
            У вас еще ничего не сохранено. Приступайте к готовке!
          </h3>
          <Link to='/recipes'>
            <button className='btn max-w-[200px] border-0 bg-light-blue hover:bg-line-gray'>
              FIND RECIPES
            </button>
          </Link>
        </div>
      ) : (
        <RecipesCustomGrid
          recipesData={favouritesArr}
          gridStyles='col-span-3 grid grid-cols-4 gap-6'
          cardsQuantity={3}
          card={<FavouritesCard removeFromFavourites={removeFromFavourites} />}
        />
      )}
    </main>
  )
}
