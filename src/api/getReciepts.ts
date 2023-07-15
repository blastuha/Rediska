import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './firebase'

// Get a list of reciepts from your database
export async function getReciepts() {
  const recipetsCol = collection(db, 'reciepts')
  const recieptsSnapshot = await getDocs(recipetsCol)
  const recieptList = recieptsSnapshot.docs.map((doc) => doc.data())
  return recieptList
}
