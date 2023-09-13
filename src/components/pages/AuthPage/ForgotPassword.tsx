import React from 'react'

import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

export const ForgotPassword: React.FC = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log('submit', values)
      handlePasswordReset(values.email)
    },
  })

  console.log(errors)

  const handlePasswordReset = (email: string) => {
    const isConfirmed = window.confirm('Вы уверены, что хотите сбросить пароль?')
    if (!isConfirmed) return

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Письмо для сброса пароля отправлено! Проверьте свой почтовый ящик.')
      })
      .catch((error) => {
        console.error('Ошибка отправки письма для сброса пароля:', error)
        alert(error)
      })
  }

  const auth = getAuth()

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
            <h5 className='mb-1 font-dancingScript text-3xl font-bold'>Forgot Password</h5>
            <p className='mb-6 font-inter text-[17px] text-[#9096B2]'>
              Пожалуйста, введите email для восстановления пароля.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-2 flex justify-between'>
              <label htmlFor='signin-email'>Email</label>
            </div>
            <input
              className={`mb-5 w-full border-[1px] border-lines-blue px-4 py-3  focus-within:outline-none`}
              type='email'
              value={values.email}
              id='email'
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button
              type='submit'
              className='text-white font-Lato flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[3px] bg-[pink] text-center disabled:opacity-75'
              disabled={values.email ? false : true}
            >
              Восстановить пароль
            </button>
            <div className='mt-5 text-center'>
              <Link to={'/signin'} className='text-[#9096B2] hover:underline'>
                Я вспомнил пароль
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
