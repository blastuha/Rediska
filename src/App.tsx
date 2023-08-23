import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home/Home.tsx'
import { WeekPlotPage } from './components/pages/WeekPlot/WeekPlotPage.tsx'
import { RecipePage } from './components/pages/RecipePage/RecipePage.tsx'
import { ErrorPage } from './components/pages/Error'
import { RecipesPage } from './components/pages/Recipes/RecipesPage.tsx'
import { CategoryPage } from './components/pages/CategoryPage/CategoryPage.tsx'
import { AuthPage } from './components/pages/AuthPage/AuthPage.tsx'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles/global.scss'

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
          element: <RecipePage />,
        },
        {
          path: 'recipes',
          element: <RecipesPage />,
        },
        {
          path: 'category/:category',
          element: <CategoryPage />,
        },
        {
          path: 'auth',
          element: <AuthPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
