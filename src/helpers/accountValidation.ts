import * as yup from 'yup'

export const SignInSchema = yup.object().shape({
  email: yup.string().required().email('Email is invalid'),
  password: yup.string().required('Password is required'),
})

export const SignUpSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  displayName: yup
    .string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  cPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), ''], 'Confirm Password does not match'),
})
