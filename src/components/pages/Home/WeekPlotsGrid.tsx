import React from 'react'
import { WeekPlotsCard } from './WeekPlotsCard.tsx'
import { WeekPlot } from '../../../models/WeekPlot.ts'

type WeekPlotsGridProps = {
  weekPlotsData: WeekPlot[] | undefined
}

export const WeekPlotsGrid: React.FC<WeekPlotsGridProps> = ({ weekPlotsData }) => {
  return (
    <div className='grid grid-rows-2 gap-4 xs:grid-cols-1 s:grid-cols-2 md:grid-cols-3'>
      {weekPlotsData?.map((plot) => (
        <WeekPlotsCard key={plot.id} {...plot} />
      ))}
    </div>
  )
}
