import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { db } from './firebase'

// Получить список квитанций из базы данных
export async function getReceipts() {
  const receiptsCol = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')

  // фильтрация запроса with multiply properties
  // const q = query(
  //   receiptsCol,
  //   where('category', '==', 'Выпечка'),
  //   where('cookingTime', '==', 30)
  // )

  // Применить фильтры к запросу и получить результаты
  const receiptsSnapshot = await getDocs(receiptsCol)
  const receiptList = receiptsSnapshot.docs.map((doc) => doc.data())

  return receiptList
}
