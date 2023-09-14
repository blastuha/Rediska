// import React, { useEffect, useState } from 'react'
// import { auth } from '../api/firebase'
// import { useFetchFavouritesCounterQuery } from '../redux/recipes/recipesApi'

// export const useIsRecipeInFav2 = () => {
//   const { data: favouritesCounterArr } = useFetchFavouritesCounterQuery(undefined)
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
