import { getDoc, doc } from 'firebase/firestore/lite'
import { db } from './firebase'

export async function getWeekPlotsById(id: string | undefined) {
  const weekPlotsDocRef = doc(
    db,
    'reciepts',
    'Q4Dhy8x85wPSOsHSsaim',
    'weekPlots',
    `${id ? id : ''}`,
  )

  const weekPlotsDocSnapshot = await getDoc(weekPlotsDocRef)
  if (weekPlotsDocSnapshot.exists()) {
    const weekPlotsData = weekPlotsDocSnapshot.data()
    return weekPlotsData
  } else {
    return null
  }
}
