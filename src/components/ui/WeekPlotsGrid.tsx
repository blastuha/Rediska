import React from 'react'
import { WeekPlotsData } from '../../models'

type WeekPlotsGridProps = {
  weekPlotsData: WeekPlotsData[]
}

export const WeekPlotsGrid: React.FC<WeekPlotsGridProps> = ({
  weekPlotsData,
}) => {
  return <div className='grid'>WeekPlotGrid</div>
}
