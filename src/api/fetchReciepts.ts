import { getReceipts } from './getReciepts'

export const fetchReciepts = async () => {
  const response = await getReceipts()
  return response
}
