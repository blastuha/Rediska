import { getNews } from './getNews'

export const fetchNews = async () => {
  const response = await getNews()
  return response
}
