import { useState, useEffect } from 'react'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from './api/fetchReciepts'

import { Layout } from './components/layout/Layout'
import { Main } from './components/pages/Main'

import './styles/global.css'

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
      <Layout>
        <Main />
      </Layout>
    </>
  )
}

export default App
