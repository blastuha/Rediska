import { useState, useEffect } from 'react'

import { Layout } from './components/layout/Layout'
import { Main } from './components/pages/Main'
import { MainSwiper } from './components/ui/MainSwiper'
import { WeekPlotsSection } from './components/ui/WeekPlotsSection'
import { WeekPlotsGrid } from './components/ui/WeekPlotsGrid'
import MarkDown from './components/ui/MarkDown/MarkDown'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from './api/fetchReciepts'
import { fetchNews } from './api/fetchNews'
import { fetchWeekPlots } from './api/fetchWeekPlots'

import { NewsData, WeekPlotsData } from './models/index'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles/global.css'

function App() {
  // изменить тип recipets
  const [reciepts, setReciepts] = useState<DocumentData[]>([])
  const [news, setNews] = useState<NewsData[]>([])
  const [weekPlots, setWeekPlots] = useState<WeekPlotsData[]>([])

  console.log(weekPlots)

  useEffect(() => {
    fetchReciepts()
      .then((res) => setReciepts(res))
      .catch((err) => console.error('Ошибка получения рецептов', err))
  }, [])

  useEffect(() => {
    fetchNews()
      .then((res) => setNews(res as NewsData[]))
      .catch((err) =>
        console.error('Ошибка получения новостей для swiper', err)
      )
  }, [])

  useEffect(() => {
    fetchWeekPlots()
      .then((res) => setWeekPlots(res as WeekPlotsData[]))
      .catch((err) =>
        console.error('Ошибка получения новостей для swiper', err)
      )
  }, [])

  return (
    <>
      <Layout>
        <Main>
          <MainSwiper newsData={news} />
          <WeekPlotsSection>
            <WeekPlotsGrid weekPlotsData={weekPlots} />
          </WeekPlotsSection>
        </Main>
      </Layout>
    </>
  )
}

export default App
