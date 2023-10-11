import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { AboutPage } from '../components/pages/AboutPage/AboutPage'
import { CategoryPage } from '../components/pages/CategoryPage/CategoryPage'
import { ErrorPage } from '../components/pages/Error'
import { FavouritesPage } from '../components/pages/FavouritesPage/FavouritesPage'
import { Home } from '../components/pages/Home/Home'
import { NewsPage } from '../components/pages/NewsPage/NewsPage'
import { RecipePage } from '../components/pages/RecipePage/RecipePage'
import { RecipesPage } from '../components/pages/Recipes/RecipesPage'
import { SelectionOfRecipes } from '../components/pages/SelectionOfRecipes/SelectionOfRecipes'
import { UserPage } from '../components/pages/UserPage/UserPage'
import { WeekPlotPage } from '../components/pages/WeekPlot/WeekPlotPage'
import { PrivateRoute } from './PrivateRouter'
import { Register } from '../components/pages/AuthPage/Register'
import { ForgotPassword } from '../components/pages/AuthPage/ForgotPassword'
import { AuthRedirect } from '../components/pages/AuthPage/AuthRedirect'

export const router = createBrowserRouter([
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
        path: 'newsPage/:id',
        element: <NewsPage />,
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
        path: 'favourites',
        element: (
          <PrivateRoute>
            <FavouritesPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'selectionOfRecipes',
        element: <SelectionOfRecipes />,
      },
      {
        path: 'user',
        element: (
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'signin',
        element: <AuthRedirect />,
      },
      {
        path: 'signup',
        element: <Register />,
      },
      {
        path: 'forgot',
        element: <ForgotPassword />,
      },
    ],
  },
])
