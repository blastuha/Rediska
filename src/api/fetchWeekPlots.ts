import { getWeekPlots } from './getWeekPlots'

export const fetchWeekPlots = async () => {
  const response = await getWeekPlots()
  return response
}
