import React from 'react'
import { WeekPlotsCard } from './WeekPlotsCard'
import { WeekPlotsData } from '../../models'

type WeekPlotsGridProps = {
  weekPlotsData: WeekPlotsData[]
}

export const WeekPlotsGrid: React.FC<WeekPlotsGridProps> = ({
  weekPlotsData,
}) => {
  return (
    <div className='grid gap-4 grid-cols-3 grid-rows-2'>
      {weekPlotsData.map((plot) => (
        <WeekPlotsCard {...plot} />
      ))}
    </div>
  )
}
