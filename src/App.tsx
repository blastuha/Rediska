import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home'
import { WeekPlotPage } from './components/pages/WeekPlotPage'
import { ErrorPage } from './components/pages/Error'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles/global.css'

const App = () => {
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
          path: 'weekPlot/:id',
          element: <WeekPlotPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
