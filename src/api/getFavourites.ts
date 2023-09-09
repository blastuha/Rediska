import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import { FavouritesData } from '../models'

export async function getFavourites() {
  let favouritesData: FavouritesData = { favourites: [] }
  const recipesRef = collection(db, `users`)
  const querySnapshot = await getDocs(recipesRef)

  querySnapshot?.forEach((doc) => {
    favouritesData = doc.data() as FavouritesData
  })

  return favouritesData.favourites
}
