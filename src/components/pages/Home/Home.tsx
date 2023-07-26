import React, { useEffect, useState } from 'react'

import { HomeSwiper } from './HomeSwiper.tsx'
import { HomeSection } from './HomeSection.tsx'
import { WeekPlotsGrid } from './WeekPlotsGrid.tsx'

import { DocumentData } from 'firebase/firestore/lite'
import { fetchReciepts } from '../../../api/fetchReciepts.ts'
import { fetchNews } from '../../../api/fetchNews.ts'
import { fetchWeekPlots } from '../../../api/fetchWeekPlots.ts'

import { NewsData } from '../../../models'
import { Plot } from '../../../models/Plot.ts'
import { CategoriesGrid } from './CategoriesGrid.tsx'

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
        <HomeSwiper newsData={news} />
        <HomeSection title='Сюжеты недели'>
          <WeekPlotsGrid weekPlotsData={weekPlots} />
        </HomeSection>
        <HomeSection title='Популярные категории'>
          <CategoriesGrid />
        </HomeSection>
      </div>
    </main>
  )
}
