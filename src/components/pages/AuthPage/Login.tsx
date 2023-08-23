import React from 'react'
import { Form } from './Form'

export const Login: React.FC = () => {
  const handleLogin = (email: string, pass: string) => console.log({ email, pass })

  return (
    <div>
      <h3>Login</h3>
      <Form title='Login' handleClick={handleLogin} />
    </div>
  )
}
