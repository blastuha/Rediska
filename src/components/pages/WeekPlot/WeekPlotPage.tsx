import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MarkDown } from '../../ui/MarkDown/MarkDown.tsx'
import { ContentHeading } from '../../ui/ContentHeading.tsx'

import { useFetchWeekPlotByIdQuery } from '../../../redux/recipes/recipesApi.ts'

export const WeekPlotPage: React.FC = () => {
  const { id } = useParams()
  const { data: plot, isLoading } = useFetchWeekPlotByIdQuery(id)

  return (
    <div className='flex-grow'>
      <div className='container mx-auto pl-4 pr-4'>
        <ContentHeading data={plot} title={plot?.title} date={plot?.date} />
        <MarkDown content={plot?.text} />
      </div>
    </div>
  )
}
