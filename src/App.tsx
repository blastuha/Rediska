import { useState, useEffect } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Main } from './components/pages/Main'
import { WeekPlotPage } from './components/pages/WeekPlotPage'
import { ErrorPage } from './components/pages/Error'
import { MainContainer } from './components/ui/MainContainer'

// import MarkDown from './components/ui/MarkDown/MarkDown'

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Main
              mainContent={
                <MainContainer
                  news={news}
                  weekPlots={weekPlots}
                />
              }
            />
          ),
        },
        {
          path: 'weekPlot',
          element: <WeekPlotPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
