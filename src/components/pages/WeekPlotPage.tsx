import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchWeekPlotsById } from '../../api/fetchWeekPlotById'

import { MarkDown } from '../ui/MarkDown/MarkDown'

import { Plot } from '../../models/Plot'

export const WeekPlotPage: React.FC = () => {
  const [plot, setPlot] = useState<Plot | undefined>(undefined)
  const { id } = useParams()

  useEffect(() => {
    fetchWeekPlotsById(id)
      .then((res) => setPlot(res as Plot))
      .catch((err) => console.error('Ошибка при получении сюжетов', err))
  }, [id])

  return (
    <div className='flex-grow'>
      <div className='container mx-auto pr-4 pl-4'>
        <div className='mb-14'>
          <MarkDown content={plot?.text} />
        </div>
      </div>
    </div>
  )
}
