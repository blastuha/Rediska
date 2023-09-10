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
import { PrivateRoute } from './router/PrivateRouter.tsx'
import { UserPage } from './components/pages/UserPage/UserPage.tsx'

import { useActions } from './hooks/useActions.ts'
import { useAuth } from './hooks/useAuth.ts'

import { getUserData } from './helpers/getUserData.ts'

import { RecipeData } from './models/RecipeData.ts'

import { useFetchFavouritesQuery } from './redux/recipes/recipesApi.ts'

import 'swiper/css'
import 'swiper/css/navigation'
import { FavouritesData } from './models/FavouritesData.ts'

const App = () => {
  const { data: favData } = useFetchFavouritesQuery(undefined)
  console.log('favData', favData)
  const auth = getAuth()
  const { isAuth } = useAuth()
  const { setUser, setFavourites } = useActions()

  useEffect(() => {
    const authStateChanged = (user: User | null) => {
      if (user && !user.isAnonymous && favData) {
        setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        setFavourites(favData?.favourites)
      } else {
        setFavourites([])
      }
    }

    onAuthStateChanged(auth, authStateChanged)
  }, [favData, auth, setFavourites, setUser])

  // useEffect(() => {
  //   const authStateChanged = (user: User | null) => {
  //     if (user && !user.isAnonymous) {
  //       ;(async () => {
  //         const usersData = await getUserData(user.uid)
  //         if (usersData?.favourites) {
  //           setFavourites(usersData.favourites as RecipeData[])
  //         } else {
  //           setFavourites([])
  //         }
  //         setUser({ email: user.email, id: user.uid, token: user.refreshToken })
  //       })().catch((err) => console.error(err))
  //     }
  //   }

  //   onAuthStateChanged(auth, authStateChanged)
  // }, [auth, setUser, setFavourites])

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
          path: 'user',
          element: (
            <PrivateRoute isAuth={isAuth}>
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
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
