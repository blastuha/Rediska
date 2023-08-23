import React from 'react'
import { Form } from './Form'

export const Register: React.FC = () => {
  const handleSignUp = (email: string, pass: string) => console.log({ email, pass })

  return (
    <div>
      <h3>Register</h3>
      <Form title='Register' handleClick={handleSignUp} />
    </div>
  )
}
