import { doc, setDoc } from 'firebase/firestore'
import { db } from '.././api/firebase'

export const createUserData = async (
  uid: string,
  userType: string,
  // favourites: какой-то тип,
  userName?: string,
) => {
  await setDoc(doc(db, 'users', uid), {
    userName: userName ? userName : null,
    uid: uid,
    type: userType,
    favourites,
  })
}
