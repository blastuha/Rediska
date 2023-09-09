import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { userActions } from '../redux/user/userSlice'
import { recipesActions } from '../redux/recipes/recipesSlice'

const allActions = {
  ...userActions,
  ...recipesActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}
