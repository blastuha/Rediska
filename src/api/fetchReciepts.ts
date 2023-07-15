import { getReciepts } from './getReciepts'

export const fetchReciepts = async () => {
  const response = await getReciepts()
  return response
}
