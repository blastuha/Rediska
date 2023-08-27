import * as yup from 'yup'

export const SignInSchema = yup.object().shape({
  email: yup.string().required().email('Email is invalid'),
  password: yup.string().required('Password is required'),
})
