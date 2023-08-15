import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export async function getWeekPlots() {
  const weekPlotsCol = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/weekPlots')

  const weakPlotsSnapshot = await getDocs(weekPlotsCol)
  const weekPlotsList = weakPlotsSnapshot.docs.map((doc) => doc.data())

  return weekPlotsList
}
