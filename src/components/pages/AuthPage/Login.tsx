import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from './Form'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const auth = getAuth()

  const handleLogin = (email: string, pass: string) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: '100%',
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className='container mx-auto pb-16 pt-28 '
    >
      <div className='mx-auto mb-16 flex flex-col p-14 shadow-[0_0_25px_10px_#f8f8fb]'>
        <div className='mb-5 text-center'>
          <h5 className='mb-1 font-dancingScript text-3xl font-bold'>Login</h5>
          <p className='font-inter text-[17px] text-[#9096B2]'>
            Please login using account detail bellow.
          </p>
        </div>

        <form>
          <div className='mb-2 flex justify-between'>
            <label htmlFor='signin-email'>Email</label>
            <p className='text-red-600 text-xs'>{}</p>
          </div>
          <input
            className={` 'border-red-600 mb-5 w-full border-[1px] border-lines-blue px-4 py-3 focus-within:outline-none`}
            type='email'
            // value={}
            id='email'
            // onChange
            // onBlur
          />

          <div className='mb-2 flex justify-between'>
            <label htmlFor='signin-password'>Password</label>
            <p className='text-red-600 text-xs'>{}</p>
          </div>
          <input
            className={` 'border-red-600 mb-5 w-full border-[1px] border-lines-blue px-4 py-3 focus-within:outline-none`}
            type='password'
            // value={}
            id='password'
            // onChange
            // onBlur
          />
          <p className='font-Lato mb-6 text-[17px] text-[#9096B2]'>Forgot your password?</p>
          <button
            type='submit'
            className='bg-pink-cc text-white font-Lato flex h-[48px] w-full items-center justify-center rounded-[3px] text-center disabled:opacity-75'
            // disabled={}
          >
            Sign In
          </button>
          <div className='mt-5 text-center'>
            <Link to={'/signup'} className='text-base text-[#9096B2] '>
              Don’t have an Account? Create account
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
{
  /* <Form title='Login' handleClick={handleLogin} /> */
}
