import { getReciepts } from '../firebase'

export const fetchReciepts = async () => {
  const response = await getReciepts()
  return response
}
