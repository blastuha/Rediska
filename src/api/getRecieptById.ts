import { getDoc, doc } from 'firebase/firestore/lite'
import { db } from './firebase'

export const getRecieptById = async (id: string | undefined) => {
  const recieptDocRef = doc(db, 'reciepts', 'Q4Dhy8x85wPSOsHSsaim', 'recipets', `${id ? id : ''}`)
  const recieptDocSnapshot = await getDoc(recieptDocRef)

  if (recieptDocSnapshot.exists()) {
    const recieptData = recieptDocSnapshot.data()
    return recieptData
  } else {
    return null
  }
}
