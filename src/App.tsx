import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home/Home.tsx'
import { WeekPlotPage } from './components/pages/WeekPlot/WeekPlotPage.tsx'
import { RecieptPage } from './components/pages/Reciept/RecieptPage.tsx'
import { ErrorPage } from './components/pages/Error'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles/global.scss'
import { CategoriesPage } from './components/pages/Categories/CategoriesPage.tsx'

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
        {
          path: 'reciept/:id',
          element: <RecieptPage />,
        },
        {
          path: 'recipes',
          element: <CategoriesPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
