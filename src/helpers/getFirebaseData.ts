import { doc, getDoc } from 'firebase/firestore'
import { db } from '.././api/firebase'

export const getFirebaseData = async (ref: string, userId?: string) => {
  const docRef = doc(db, ref, userId ? userId : '')
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}
