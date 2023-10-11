import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { MarkDown } from '../../ui/MarkDown/MarkDown.tsx'
import { ContentHeading } from '../../ui/ContentHeading.tsx'
import Loader from '../../ui/Loader.tsx'

import { useFetchWeekPlotByIdQuery } from '../../../redux/recipes/recipesApi.ts'
import { useScrollToTop } from '../../../hooks/useScrollToTop.ts'

export const WeekPlotPage: React.FC = () => {
  const { id } = useParams()
  const { data: plot, isLoading } = useFetchWeekPlotByIdQuery(id)
  useScrollToTop()

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      {!isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <ContentHeading data={plot} title={plot?.title} date={plot?.date} />
          <MarkDown content={plot?.text} />
        </motion.div>
      ) : (
        <Loader />
      )}
    </main>
  )
}
