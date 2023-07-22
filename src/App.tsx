import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home'
import { WeekPlotPage } from './components/pages/WeekPlotPage'
import { ErrorPage } from './components/pages/Error'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles/global.css'

import { WeekPlotsData } from './models'
import { fetchWeekPlots } from './api/fetchWeekPlots'

const App = () => {
  const [weekPlots, setWeekPlots] = useState<WeekPlotsData[]>([])

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
          element: <Home />,
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
