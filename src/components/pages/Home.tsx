import React, { useEffect, useState } from 'react'

import { MainSwiper } from '../ui/MainSwiper'
import { WeekPlotsSection } from '../ui/WeekPlotsSection'
import { WeekPlotsGrid } from '../ui/WeekPlotsGrid'
// import MarkDown from './components/ui/MarkDown/MarkDown'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from '../../api/fetchReciepts.ts'
import { fetchNews } from '../../api/fetchNews.ts'
import { fetchWeekPlots } from '../../api/fetchWeekPlots.ts'

import { NewsData, WeekPlotsData } from '../../models'

export const Home: React.FC = () => {
  // изменить тип recipets
  const [reciepts, setReciepts] = useState<DocumentData[]>([])
  const [news, setNews] = useState<NewsData[]>([])
  const [weekPlots, setWeekPlots] = useState<WeekPlotsData[]>([])

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
    <main className='flex-grow'>
      <div className='container mx-auto pr-4 pl-4'>
        <div className='mb-14'>
          <MainSwiper newsData={news} />
          <WeekPlotsSection>
            <WeekPlotsGrid weekPlotsData={weekPlots} />
          </WeekPlotsSection>
        </div>
      </div>
    </main>
  )
}
