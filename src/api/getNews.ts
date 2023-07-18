import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './firebase'

// Получить список квитанций из базы данных
export async function getNews() {
  const newsCol = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/news')

  // Применить фильтры к запросу и получить результаты
  const newsSnapshot = await getDocs(newsCol)
  const newsList = newsSnapshot.docs.map((doc) => doc.data())

  return newsList
}
