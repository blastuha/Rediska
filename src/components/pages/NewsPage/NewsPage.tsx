import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MarkDown } from '../../ui/MarkDown/MarkDown.tsx'
import { ContentHeading } from '../../ui/ContentHeading.tsx'

import {
  useFetchWidgetNewsByIdQuery,
  useFetchWidgetNewsQuery,
} from '../../../redux/recipes/recipesApi.ts'

export const NewsPage: React.FC = () => {
  const { id } = useParams()
  const { data: news, isLoading } = useFetchWidgetNewsByIdQuery(id)

  console.log('news', news)

  return (
    <div className='flex-grow'>
      <div className='container mx-auto pl-4 pr-4'>
        <ContentHeading data={news} />
        <MarkDown content={news?.text} />
      </div>
    </div>
  )
}
