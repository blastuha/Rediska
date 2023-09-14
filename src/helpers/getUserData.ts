import { doc, getDoc } from 'firebase/firestore'
import { db } from '.././api/firebase'

export const getUserData = async (uid: string) => {
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}
