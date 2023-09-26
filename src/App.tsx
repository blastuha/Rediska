import { useEffect, useState } from 'react'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home/Home.tsx'
import { WeekPlotPage } from './components/pages/WeekPlot/WeekPlotPage.tsx'
import { RecipePage } from './components/pages/RecipePage/RecipePage.tsx'
import { ErrorPage } from './components/pages/Error'
import { RecipesPage } from './components/pages/Recipes/RecipesPage.tsx'
import { CategoryPage } from './components/pages/CategoryPage/CategoryPage.tsx'
import { Login } from './components/pages/AuthPage/Login.tsx'
import { Register } from './components/pages/AuthPage/Register.tsx'
import { UserPage } from './components/pages/UserPage/UserPage.tsx'
import { FavouritesPage } from './components/pages/FavouritesPage/FavouritesPage.tsx'
import { ForgotPassword } from './components/pages/AuthPage/ForgotPassword.tsx'
import { NewsPage } from './components/pages/NewsPage/NewsPage.tsx'
import { SelectionOfRecipes } from './components/pages/SelectionOfRecipes/SelectionOfRecipes.tsx'
import { PrivateRoute } from './router/PrivateRouter.tsx'

import { useActions } from './hooks/useActions.ts'
import { useAuth } from './hooks/useAuth.ts'

import { getUserData } from './helpers/getUserData.ts'

import { RecipeData } from './models/RecipeData.ts'

import 'swiper/css'
import 'swiper/css/navigation'

const App = () => {
  const auth = getAuth()
  const { isAuth } = useAuth()
  const { setUser, setFavourites } = useActions()

  useEffect(() => {
    const authStateChanged = (user: User | null) => {
      if (user && !user.isAnonymous) {
        ;(async () => {
          const usersData = await getUserData(user.uid)
          if (usersData?.favourites) {
            setFavourites(usersData.favourites as RecipeData[])
          } else {
            setFavourites([])
          }
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        })().catch((err) => console.error(err))
      }
    }

    onAuthStateChanged(auth, authStateChanged)
  }, [auth, setUser, setFavourites])

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
          element: isAuth ? <Navigate to='/user' /> : <Login />,
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

  return <RouterProvider router={router} />
}

export default App
