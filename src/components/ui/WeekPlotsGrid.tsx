import React from 'react'
import { WeekPlotsCard } from './WeekPlotsCard'
import { Plot } from '../../models/Plot'

type WeekPlotsGridProps = {
  weekPlotsData: Plot[]
}

export const WeekPlotsGrid: React.FC<WeekPlotsGridProps> = ({ weekPlotsData }) => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      {weekPlotsData.map((plot) => (
        <WeekPlotsCard key={plot.id} {...plot} />
      ))}
    </div>
  )
}
