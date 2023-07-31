import { getRecieptById } from './getRecieptById'

export const fetchRecieptById = async (id: string | undefined) => {
  const response = await getRecieptById(id)
  return response
}
