import { FC, useState } from 'react'

type FormProps = {
  title: string
  handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [fullname, setFullname] = useState('')

  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <input
        type='text'
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        placeholder='fullName'
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  )
}

export { Form }
