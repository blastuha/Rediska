import { useAppSelector } from './useAppSelector'
import { getAuth } from 'firebase/auth'

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.user)
  const auth = getAuth().currentUser

  console.log('auth', auth)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
