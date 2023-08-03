import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { HomeSwiper } from './HomeSwiper.tsx'
import { HomeSection } from './HomeSection.tsx'
import { WeekPlotsGrid } from './WeekPlotsGrid.tsx'

import { fetchReciepts } from '../../../api/fetchReciepts.ts'
import { fetchNews } from '../../../api/fetchNews.ts'
import { fetchWeekPlots } from '../../../api/fetchWeekPlots.ts'

import { NewsData, RecieptsData } from '../../../models'
import { Plot } from '../../../models/Plot.ts'
import { CategoriesGrid } from './CategoriesGrid.tsx'
import { RecieptsGrid } from './RecieptsGrid.tsx'

export const Home: React.FC = () => {
  // изменить тип recipets
  const [reciepts, setReciepts] = useState<RecieptsData[]>([])
  const [news, setNews] = useState<NewsData[]>([])
  const [weekPlots, setWeekPlots] = useState<Plot[]>([])

  console.log(reciepts)

  useEffect(() => {
    fetchReciepts()
      .then((res) => setReciepts(res as RecieptsData[]))
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: '100%',
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <main className='container mx-auto flex-grow pl-4 pr-4'>
        <div className='mb-4'>
          <HomeSwiper newsData={news} />
        </div>
        <HomeSection title='Сюжеты недели'>
          <WeekPlotsGrid weekPlotsData={weekPlots} />
        </HomeSection>
        <HomeSection title='Популярные категории'>
          <CategoriesGrid />
        </HomeSection>
        <HomeSection title='Последние рецепты'>
          <RecieptsGrid recieptsData={reciepts} />
        </HomeSection>
      </main>
    </motion.div>
  )
}
