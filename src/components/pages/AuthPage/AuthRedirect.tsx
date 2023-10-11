import { Navigate } from 'react-router-dom'
import { Login } from './Login'
import { useAuth } from '../../../hooks/useAuth'

export const AuthRedirect = () => {
  const { isAuth } = useAuth()
  return isAuth ? <Navigate to='/user' /> : <Login />
}
