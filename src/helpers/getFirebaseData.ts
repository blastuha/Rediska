import { doc, getDoc } from 'firebase/firestore'
import { db } from '.././api/firebase'

export const getFirebaseData = async (ref: string) => {
  const docRef = doc(db, ref)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}
