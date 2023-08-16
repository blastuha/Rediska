import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { HomeSwiper } from './HomeSwiper.tsx'
import { HomeSection } from './HomeSection.tsx'
import { WeekPlotsGrid } from './WeekPlotsGrid.tsx'

import { CategoriesGrid } from './CategoriesGrid.tsx'
import { RecipesGrid } from './RecipesGrid.tsx'

import { useFetchWeekPlotsQuery } from '../../../redux/recipes/recipesApi.ts'
import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi.ts'
import { useFetchWidgetNewsQuery } from '../../../redux/recipes/recipesApi.ts'

export const Home: React.FC = () => {
  const { data: weekPlots = [], isLoading: isWeekPlotsLoading } = useFetchWeekPlotsQuery(null)
  const { data: recipes = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)
  const { data: widgetNews = [], isLoading: isNewsLoading } = useFetchWidgetNewsQuery(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: '100%',
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <main className='container mx-auto flex-grow pl-4 pr-4'>
        <div className='mb-4'>
          <HomeSwiper widgetNewsData={widgetNews} />
        </div>
        <HomeSection title='Сюжеты недели'>
          <WeekPlotsGrid weekPlotsData={weekPlots} />
        </HomeSection>
        <HomeSection title='Популярные категории'>
          <CategoriesGrid />
        </HomeSection>
        <HomeSection title='Последние рецепты'>
          <RecipesGrid recipesData={recipes} />
        </HomeSection>
      </main>
    </motion.div>
  )
}
