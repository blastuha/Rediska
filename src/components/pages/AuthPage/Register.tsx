import React from 'react'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

import { useActions } from '../../../hooks/useActions'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import { SignUpSchema } from '../../../helpers/accountValidation'

export const Register: React.FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const { setUser } = useActions()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting } =
    useFormik({
      initialValues: {
        displayName: '',
        email: '',
        password: '',
        cPassword: '',
      },
      validationSchema: SignUpSchema,
      onSubmit: (values) => {
        console.log('submit', values)
        handleRegister(values.email, values.password, values.displayName)
        navigate('/')
      },
    })

  const handleRegister = (email: string, password: string, displayName: string) => {
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

  useScrollToTop()

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
            <h5 className='mb-1 font-dancingScript text-3xl font-bold'>Registration</h5>
            <p className='font-inter text-[#9096B2] xs:text-[0.9rem] sm:text-[1rem]'>
              Пожалуйста, введите данные Вашей будущей учетной записи.
            </p>
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
              <label htmlFor='signin-email'>Username</label>
              <p className='text-xs text-[#fc4848]'>{touched.displayName && errors.displayName}</p>
            </div>
            <input
              className={`mb-5 w-full border-[1px] px-4 py-3 focus-within:outline-none ${
                errors.displayName && touched.displayName
                  ? 'border-[#fc4848] '
                  : 'border-lines-blue'
              }`}
              type='text'
              value={values.displayName}
              id='displayName'
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

            <div className='mb-2 flex justify-between'>
              <label htmlFor='signin-password'>Repeat Password</label>
              <p className='text-xs text-[#fc4848]'>{touched.cPassword && errors.cPassword}</p>
            </div>
            <input
              className={`mb-5 w-full border-[1px] px-4 py-3 focus-within:outline-none ${
                errors.cPassword && touched.cPassword ? 'border-[#fc4848] ' : ' border-lines-blue'
              }`}
              type='password'
              value={values.cPassword}
              id='cPassword'
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button
              type='submit'
              className='text-white font-Lato flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[pink] text-center disabled:opacity-75'
              disabled={isSubmitting}
            >
              Зарегистрироваться
            </button>

            <div className='mt-5 text-center'>
              <Link to={'/signin'} className='text-[#9096B2] hover:underline'>
                У вас есть аккаунт? Вход
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
