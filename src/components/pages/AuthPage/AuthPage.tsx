import React, { useEffect } from 'react'
import { Login } from './Login'
import { Register } from './Register'

import { useAuth } from '../../../hooks/useAuth'

export const AuthPage: React.FC = () => {
  const { email, token, id, isAuth } = useAuth()

  // const { email, token, id } = useAppSelector((state) => state.user)

  useEffect(() => {
    console.log('hookdata', email)
  }, [email, token, id])

  return (
    <div className='container mx-auto flex-grow'>
      <Login />
      <Register />
      {email ? 'isAuthTRUE' : 'isAuthFALSE'}
    </div>
  )
}
