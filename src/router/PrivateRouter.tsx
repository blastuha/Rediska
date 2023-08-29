import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  children: React.ReactElement
  isAuth: boolean
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to='/signin' />
  }
  return children
}
