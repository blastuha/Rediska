import { useState, useEffect } from 'react'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from './api/fetchReciepts'

import { Header } from './components/layout/Header/Header'

import './styles/global.scss'

function App() {
  const [reciepts, setReciepts] = useState<DocumentData[]>([])

  console.log(reciepts)

  useEffect(() => {
    fetchReciepts()
      .then((res) => setReciepts(res))
      .catch((err) => console.error('Ошибка получения данных', err))
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default App
