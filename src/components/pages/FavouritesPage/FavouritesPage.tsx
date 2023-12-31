import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { useFetchRecipesInFavouriteQuery } from '../../../redux/recipes/recipesApi'

import { RecipesCustomGrid } from '../Recipes/RecipesCustomGrid'
import { FavouritesCard } from './FavouritesCard'
import Loader from '../../ui/Loader'

import { useAppSelector } from '../../../hooks/useAppSelector'
import { useFavouritesActions } from '../../../hooks/useFavouritesActions'
import { useScrollToTop } from '../../../hooks/useScrollToTop'

export const FavouritesPage: React.FC = () => {
  const { isLoading } = useFetchRecipesInFavouriteQuery(undefined)
  const favouritesArr = useAppSelector((state) => state.recipes.favourites)
  const { removeFromFavourites } = useFavouritesActions()

  useScrollToTop()

  return !isLoading ? (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: '100%',
          transition: { duration: 0 },
        }}
        exit={{ opacity: 1, transition: { duration: 0 } }}
      >
        <div className='align-center mb-8 flex justify-center'>
          <h3 className='font-playfair text-dark-blue xs:text-2xl sm:text-3xl lg:text-4xl'>
            МОИ РЕЦЕПТЫ
          </h3>
        </div>
        {favouritesArr.length > 0 && (
          <div className='mb-8'>
            <h3 className='font-playfair text-dark-blue xs:text-xl sm:text-2xl lg:text-3xl'>
              All ({favouritesArr.length})
            </h3>
          </div>
        )}

        {favouritesArr.length === 0 ? (
          <div className='flex flex-col items-center justify-center'>
            <h3 className=' xs:text-md mb-12 text-center font-playfair text-xl font-[400] text-dark-blue sm:text-lg lg:text-xl'>
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
            gridStyles='lg:col-span-4 grid lg:grid-cols-4 gap-4 sm:grid-cols-3 sm:col-span-3 xs:grid-cols-1 xs:col-span-1 s:grid-cols-2 s:col-span-2'
            cardsQuantity={100}
            card={<FavouritesCard removeFromFavourites={removeFromFavourites} />}
          />
        )}
      </motion.div>
    </main>
  ) : (
    <Loader styles='flex h-full w-full flex-grow items-center justify-center overflow-hidden bg-[#ffff]' />
  )
}
