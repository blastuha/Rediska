import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './firebase'

// Получить список квитанций из базы данных
export async function getWeekPlots() {
  const weekPlotsCol = collection(
    db,
    '/reciepts/Q4Dhy8x85wPSOsHSsaim/weekPlots'
  )

  // Применить фильтры к запросу и получить результаты
  const weakPlotsSnapshot = await getDocs(weekPlotsCol)
  const weekPlotsList = weakPlotsSnapshot.docs.map((doc) => doc.data())

  return weekPlotsList
}
