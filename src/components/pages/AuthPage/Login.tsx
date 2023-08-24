import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from './Form'

export const Login: React.FC = () => {
  const handleLogin = (email: string, pass: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <h3>Login</h3>
      <Form title='Login' handleClick={handleLogin} />
    </div>
  )
}
