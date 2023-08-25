import { FC, useState } from 'react'

type FormProps = {
  title: string
  handleClick: (email: string, pass: string, displayName: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [displayName, setDisplayName] = useState('')

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
      {title === 'Register' ? (
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder='fullName'
        />
      ) : null}

      <button onClick={() => handleClick(email, pass, displayName)}>{title}</button>
    </div>
  )
}

export { Form }
