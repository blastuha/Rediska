import { useState, useEffect } from 'react'

import { Layout } from './components/layout/Layout'
import { Main } from './components/pages/Main'
import { MainSwiperSlide } from './components/ui/MainSwiperSlide'
// import { MainSwiper } from './components/ui/MainSwiper'
import { MainSwiper } from './components/ui/MainSwiper2'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from './api/fetchReciepts'
import { fetchNews } from './api/fetchNews'

import { NewsData } from './models'

import 'swiper/css'
import 'swiper/css/navigation'

import './styles/global.css'

function App() {
  const [reciepts, setReciepts] = useState<DocumentData[]>([])
  const [news, setNews] = useState<NewsData[]>([])

  console.log({ reciepts, news })

  useEffect(() => {
    fetchReciepts()
      .then((res) => setReciepts(res))
      .catch((err) => console.error('Ошибка получения данных', err))
  }, [])

  useEffect(() => {
    fetchNews()
      .then((res) => setNews(res as NewsData[]))
      .catch((err) => console.error('Ошибка получения данных', err))
  }, [])

  return (
    <>
      <Layout>
        <Main>
          <MainSwiper
            childrenEl={(item) => <MainSwiperSlide {...item} />}
            newsData={news}
          ></MainSwiper>
        </Main>
      </Layout>
    </>
  )
}

export default App
