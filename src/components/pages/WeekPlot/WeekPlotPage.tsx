import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { fetchWeekPlotsById } from '../../../api/fetchWeekPlotById.ts'

import { MarkDown } from '../../ui/MarkDown/MarkDown.tsx'

import { WeekPlot } from '../../../models/WeekPlot.ts'
import { ContentHeading } from '../../ui/ContentHeading.tsx'

import { useFetchWeekPlotsQuery } from '../../../redux/recipes/recipesApi.ts'

export const WeekPlotPage: React.FC = () => {
  const [plot, setPlot] = useState<WeekPlot | null>(null)
  const { id } = useParams()

  const { data: plot2 } = useFetchWeekPlotsQuery(null)

  useEffect(() => {
    fetchWeekPlotsById(id)
      .then((res) => setPlot(res as WeekPlot))
      .catch((err) => console.error('Ошибка при получении сюжетов', err))
  }, [id])

  return (
    <div className='flex-grow'>
      <div className='container mx-auto pl-4 pr-4'>
        <ContentHeading {...plot} />
        <MarkDown content={plot?.text} />
      </div>
    </div>
  )
}
