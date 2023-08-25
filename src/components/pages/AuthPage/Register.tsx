import React from 'react'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { Form } from './Form'

import { useActions } from '../../../hooks/useActions'

export const Register: React.FC = () => {
  const navigate = useNavigate()
  const { setUser } = useActions()

  const handleRegister = (email: string, password: string, displayName: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)

        updateProfile(user, { displayName: displayName })
          .then(() => {
            console.log('Логин пользователя установлен:', displayName)
          })
          .catch((error) => {
            console.error('Ошибка при обновлении логина пользователя:', error)
          })

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
