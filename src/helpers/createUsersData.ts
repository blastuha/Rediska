import { doc, setDoc } from 'firebase/firestore'
import { db } from '.././api/firebase'
import { RecipeFavObj } from '../models'

export const createUserData = async (
  uid: string,
  userType: string,
  favourites: RecipeFavObj[],
  userName?: string,
) => {
  await setDoc(doc(db, 'users', uid), {
    userName: userName ? userName : null,
    uid: uid,
    type: userType,
    favourites,
  })
}
