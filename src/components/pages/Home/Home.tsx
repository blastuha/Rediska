import React, { useEffect, useState } from 'react'

import { MainSwiper } from '../ui/MainSwiper'
import { HomeSection } from '../ui/HomeSection.tsx'
import { WeekPlotsGrid } from '../ui/WeekPlotsGrid'
// import MarkDown from './components/ui/MarkDown/MarkDown'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from '../../api/fetchReciepts.ts'
import { fetchNews } from '../../api/fetchNews.ts'
import { fetchWeekPlots } from '../../api/fetchWeekPlots.ts'

import { NewsData } from '../../models'
import { Plot } from '../../models/Plot.ts'

export const Home: React.FC = () => {
  // изменить тип recipets
  const [reciepts, setReciepts] = useState<DocumentData[]>([])
  const [news, setNews] = useState<NewsData[]>([])
  const [weekPlots, setWeekPlots] = useState<Plot[]>([])

  useEffect(() => {
    fetchReciepts()
      .then((res) => setReciepts(res))
      .catch((err) => console.error('Ошибка получения рецептов', err))
  }, [])

  useEffect(() => {
    fetchNews()
      .then((res) => setNews(res as NewsData[]))
      .catch((err) => console.error('Ошибка получения новостей для swiper', err))
  }, [])

  useEffect(() => {
    fetchWeekPlots()
      .then((res) => setWeekPlots(res as Plot[]))
      .catch((err) => console.error('Ошибка получения новостей для swiper', err))
  }, [])

  return (
    <main className='flex-grow'>
      <div className='container mx-auto pl-4 pr-4'>
        <MainSwiper newsData={news} />
        <HomeSection>
          <WeekPlotsGrid weekPlotsData={weekPlots} />
        </HomeSection>
      </div>
    </main>
  )
}
