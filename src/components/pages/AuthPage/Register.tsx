import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { Form } from './Form'

import { useActions } from '../../../hooks/useActions'

export const Register: React.FC = () => {
  const navigate = useNavigate()
  const { setUser } = useActions()

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)

        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
          navigate('/')
      })
      .catch(console.error)
  }

  return (
    <div>
      <h3>Register</h3>
      <Form title='Register' handleClick={handleRegister} />
    </div>
  )
}
