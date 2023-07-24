import { getWeekPlotsById } from './getWeekPlotById'

export const fetchWeekPlotsById = async (id: string | undefined) => {
  const response = await getWeekPlotsById(id)
  return response
}
