import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'

import { Login } from './Login'
import { Register } from './Register'

import { useAuth } from '../../../hooks/useAuth'

export const AuthPage: React.FC = () => {
  const { email, token, id, isAuth } = useAuth()

  const user = getAuth().currentUser?.displayName

  useEffect(() => {
    console.log('hookdata', email)
    console.log('user', user)
  }, [email, token, id])

  return (
    <div className='container mx-auto flex-grow'>
      <Login />
      <Register />
      {email ? 'isAuthTRUE' : 'isAuthFALSE'}
    </div>
  )
}
