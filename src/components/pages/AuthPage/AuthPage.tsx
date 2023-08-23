import React from 'react'
import { Login } from './Login'
import { Register } from './Register'

export const AuthPage: React.FC = () => {
  return (
    <div className='container mx-auto flex-grow'>
      <Login />
      <Register />
    </div>
  )
}
