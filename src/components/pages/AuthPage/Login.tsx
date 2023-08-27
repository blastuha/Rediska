import React from 'react'

import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { SignInSchema } from '../../../helpers/accountValidation'

export const Login: React.FC = () => {
  const auth = getAuth()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting } =
    useFormik({
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
            Пожалуйста, войдите, используя данные учетной записи.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='mb-2 flex justify-between'>
            <label htmlFor='signin-email'>Email</label>
            <p className='text-xs text-[red]'>{errors.email}</p>
          </div>
          <input
            className={`mb-5 w-full border-[1px] border-lines-blue px-4 py-3 focus-within:outline-none ${
              errors.email && touched.email ? 'border-[red] ' : ''
            }`}
            type='email'
            value={values.email}
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className='mb-2 flex justify-between'>
            <label htmlFor='signin-password'>Password</label>
            <p className='text-xs text-[red]'>{errors.password}</p>
          </div>
          <input
            className={`mb-5 w-full border-[1px] border-lines-blue px-4 py-3 focus-within:outline-none ${
              errors.email && touched.email ? 'border-[red] ' : ''
            }`}
            type='password'
            value={values.password}
            id='password'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className='font-Lato mb-6 text-[17px] text-[#9096B2]'>Forgot your password?</p>
          <button
            type='submit'
            className='text-white font-Lato flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[pink] text-center disabled:opacity-75'
            disabled={isSubmitting}
          >
            Sign In
          </button>
          <div className='mt-5 text-center'>
            <Link to={'/signup'} className='text-base text-[#9096B2] '>
              Registration
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
