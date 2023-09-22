import React from 'react'
import { motion } from 'framer-motion'

import { HomeSwiper } from './HomeSwiper.tsx'
import { HomeSection } from './HomeSection.tsx'
import { WeekPlotsGrid } from './WeekPlotsGrid.tsx'
import { Widget } from '../../ui/Widget.tsx'
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
        opacity: 1,
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <main className='container mx-auto flex-grow pl-4 pr-4'>
        <HomeSection>
          <HomeSwiper widgetNewsData={widgetNews} />
        </HomeSection>

        <HomeSection title='Сюжеты недели'>
          <WeekPlotsGrid weekPlotsData={weekPlots} />
        </HomeSection>

        <HomeSection title='Подборки'>
          <Widget
            photoURL='https://www.gastronom.ru/binfiles/images/20230919/b664260d.jpg'
            title='Пять интересных и очень-очень быстрых блюд на всю неделю'
            paragraph='Откажитесь от еды на вынос и скучной еды навсегда'
            link='/selectionOfRecipes'
          />
        </HomeSection>

        {/* 
        <HomeSection title='Популярные категории'>
          <CategoriesGrid />
        </HomeSection> */}

        <HomeSection title='Последние рецепты'>
          <RecipesGrid recipesData={recipes} />
        </HomeSection>
      </main>
    </motion.div>
  )
}
