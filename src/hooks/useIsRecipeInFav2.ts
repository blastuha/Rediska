// import React, { useEffect, useState } from 'react'
// import { auth } from '../api/firebase'
// import { useFetchRecipesInFavouriteQuery } from '../redux/recipes/recipesApi'

// export const useIsRecipeInFav2 = () => {
//   const { data: favouritesCounterArr } = useFetchRecipesInFavouriteQuery(undefined)
//   const [isInFavourite, setIsInFavourite] = useState<number | undefined>(-1)
//   const userId = auth.currentUser?.uid

//   useEffect(() => {
//     const isInFavourites = () => {
//       if (favouritesCounterArr) {
//         return favouritesCounterArr?.findIndex((item) => item.userId === userId)
//       } else {
//         return -1
//       }
//     }

//     setIsInFavourite(isInFavourites(userId, favouritesCounterArr))
//   }, [userId, favouritesCounterArr])

//   return isInFavourite
// }
