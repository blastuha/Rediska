import React, { useState } from 'react'

import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAuth, signInWithEmailAndPassword, AuthError } from 'firebase/auth'

import { useActions } from '../../../hooks/useActions'

import { SignInSchema } from '../../../helpers/accountValidation'

export const Login: React.FC = () => {
  const [error, setError] = useState<AuthError | null>(null)

  const auth = getAuth()
  const { setUser } = useActions()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      console.log('submit', values)
      handleLogin(values.email, values.password)
    },
  })

  const handleLogin = (email: string, pass: string) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        console.log(user), setUser({ email: user.email, id: user.uid, token: user.refreshToken })
      })
      .catch((err: AuthError) => setError(err))
  }

  return (
    <div className='container mx-auto flex-grow'>
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
            <p className='mb-6 font-inter text-[#9096B2] xs:text-[0.9rem] sm:text-[1rem]'>
              Пожалуйста, войдите, используя данные учетной записи.
            </p>
            <p className='text-[#fc4848]'>{error ? 'Вы ввели неверный email или password' : ''}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-2 flex justify-between'>
              <label htmlFor='signin-email'>Email</label>
              <p className='text-xs text-[#fc4848]'>{touched.email && errors.email}</p>
            </div>
            <input
              className={`mb-5 w-full border-[1px] px-4 py-3 focus-within:outline-none ${
                errors.email && touched.email ? 'border-[#fc4848] ' : 'border-lines-blue'
              }`}
              type='email'
              value={values.email}
              id='email'
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className='mb-2 flex justify-between'>
              <label htmlFor='signin-password'>Password</label>
              <p className='text-xs text-[#fc4848]'>{touched.password && errors.password}</p>
            </div>
            <input
              className={`mb-5 w-full border-[1px] px-4 py-3 focus-within:outline-none ${
                errors.password && touched.password ? 'border-[#fc4848] ' : ' border-lines-blue'
              }`}
              type='password'
              value={values.password}
              id='password'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Link to='/forgot'>
              <p className='font-Lato mb-6 cursor-pointer text-[17px] text-[#9096B2]  hover:underline'>
                Забыл пароль?
              </p>
            </Link>
            <button
              type='submit'
              className='text-white font-Lato flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[pink] text-center disabled:opacity-75'
              disabled={values.email && values.password && !errors.email ? false : true}
            >
              Вход
            </button>
            <div className='mt-5 text-center'>
              <Link to={'/signup'} className='text-[#9096B2] hover:underline'>
                Создать аккаунт
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
