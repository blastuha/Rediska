import { getWeekPlotsById } from './getWeekPlotById'

export const fetchWeekPlotsById = async (id: string | undefined) => {
  const response = await getWeekPlotsById(id)
  console.log('response', response)
  return response
}
