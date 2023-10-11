import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import { MarkDown } from '../../ui/MarkDown/MarkDown.tsx'
import { ContentHeading } from '../../ui/ContentHeading.tsx'
import Loader from '../../ui/Loader.tsx'

import { useFetchWidgetNewsByIdQuery } from '../../../redux/recipes/recipesApi.ts'

import { useScrollToTop } from '../../../hooks/useScrollToTop.ts'

export const NewsPage: React.FC = () => {
  const { id } = useParams()
  const { data: news, isLoading } = useFetchWidgetNewsByIdQuery(id)

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
          <ContentHeading data={news} date={news?.date} title={news?.title} />
          <MarkDown content={news?.text} />
        </motion.div>
      ) : (
        <Loader />
      )}
    </main>
  )
}
