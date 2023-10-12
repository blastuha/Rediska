import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Loader from '../components/ui/Loader'

type PrivateRouteProps = {
  children: React.ReactElement
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user)
    })
    return () => unsubscribe()
  }, [])

  if (isAuth === null) {
    return (
      <main className='container mx-auto flex flex-grow justify-center pl-4 pr-4 font-dancingScript text-5xl'>
        {/* <p className='mt-10'>Loading...</p> */}
        <Loader styles='flex flex-grow w-full items-center justify-center overflow-hidden bg-[#ffff]' />
      </main>
    )
  }

  if (!isAuth) {
    return <Navigate to='/signin' replace />
  }

  return children
}
