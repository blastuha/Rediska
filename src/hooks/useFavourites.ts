import React, { useEffect } from 'react'
import { useFetchFavouritesQuery } from '../redux/recipes/recipesApi'
import { useActions } from './useActions'
import { useAppSelector } from './useAppSelector'

export const useFavourites = () => {
  const { data, isLoading, isSuccess, isError } = useFetchFavouritesQuery(undefined)
  const { setFavourites } = useActions()
  const favourites = useAppSelector((state) => state.recipes.favourites)

  useEffect(() => {
    if (isSuccess) {
      setFavourites(data)
    } else {
      console.error(isError)
    }
  }, [isSuccess, data, setFavourites, isError])

  return { favourites, isLoading, isError }
}
