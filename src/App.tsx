import { useEffect } from 'react'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { RouterProvider } from 'react-router-dom'

import { router } from './router/router.tsx'

import { useActions } from './hooks/useActions.ts'
import { getUserData } from './helpers/getUserData.ts'

import { RecipeData } from './models/RecipeData.ts'

import 'swiper/css'
import 'swiper/css/navigation'

const App = () => {
  const auth = getAuth()
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

  return <RouterProvider router={router} />
}

export default App
