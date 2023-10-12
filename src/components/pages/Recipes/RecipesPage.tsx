import React from 'react'
import { motion } from 'framer-motion'

import { Carousel } from './Carousel.tsx'
import { RecipesSection } from './RecipesSection.tsx'
import { RecipesCustomGrid } from './RecipesCustomGrid.tsx'
import { RecipesSectionHeading } from './RecipesSectionHeading.tsx'
import { TextRightCard } from './TextRightCard.tsx'
import { SpecialDietCard } from './SpecialDietCard.tsx'
import { BgCard } from './BgCard.tsx'
import Loader from '../../ui/Loader.tsx'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi.ts'

import { useScrollToTop } from '../../../hooks/useScrollToTop.ts'

export const RecipesPage: React.FC = () => {
  const { data: recipesData = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)
  useScrollToTop()

  return !isRecipesLoading ? (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <Carousel blockStyles='relative  xs:mb-6  md:mb-10 mt-0 ' />
        <RecipesSection
          sectionStyles='grid h-fit grid-cols-3 gap-4 md:mb-16 xs:mb-10'
          sectionHeading={
            <RecipesSectionHeading
              title='MOST POPULAR'
              subtitle='Must try dishes.'
              blockStyles='col-span-3 row-span-1'
            />
          }
        >
          <RecipesCustomGrid
            recipesData={recipesData}
            gridStyles='grid md:col-span-3 md:grid-cols-2 gap-4 xs:col-span-3 xs:grid-cols-1 '
            cardsQuantity={7}
            card={<TextRightCard />}
            sort='mostPopular'
          />
        </RecipesSection>

        <RecipesSection
          sectionStyles='grid h-fit grid-cols-3 gap-4 md:mb-16 xs:mb-10'
          sectionHeading={
            <RecipesSectionHeading
              title='VEGAN KETO CUISINE'
              subtitle='Plant-powered and low-carb delights await.'
              blockStyles='col-span-3 row-span-1'
            />
          }
        >
          <RecipesCustomGrid
            recipesData={recipesData}
            gridStyles=' col-span-3 grid xs:grid-cols-2 md:grid-cols-4 xs:gap-2 gap-4 text-xl font-extrabold'
            cardsQuantity={4}
            firstCardStyles='xs:col-span-2 md:col-span-4  xs:text-2xl md:text-3xl lg:text-5xl text-center'
            card={<BgCard />}
            filterWordsArr={['диетический', 'кето', 'веган']}
          />
        </RecipesSection>

        <RecipesSection
          sectionStyles='grid h-fit grid-cols-3 gap-4 md:mb-16 xs:mb-10'
          sectionHeading={
            <RecipesSectionHeading
              title='RECIPES FOR SPECIAL DIETS'
              subtitle='Actually delicious meals for keto, gluten-free, and more.'
              blockStyles='col-span-3 row-span-1'
            />
          }
        >
          <RecipesCustomGrid
            recipesData={recipesData}
            gridStyles='col-span-3 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
            cardsQuantity={3}
            card={<SpecialDietCard />}
          />
        </RecipesSection>

        <RecipesSection
          sectionStyles='grid h-fit grid-cols-3 gap-4 md:mb-16 xs:mb-10'
          sectionHeading={
            <RecipesSectionHeading
              title='MORE DELISH RECIPES'
              subtitle='It`s delicious.'
              blockStyles='col-span-3 row-span-1'
            />
          }
        >
          <RecipesCustomGrid
            recipesData={recipesData}
            gridStyles='grid md:col-span-3 md:grid-cols-2 gap-4 xs:col-span-3 xs:grid-cols-1'
            cardsQuantity={11}
            card={<TextRightCard />}
            filterWordsArr={['десерт', 'крамбл', 'маффин']}
          />
        </RecipesSection>
      </motion.div>
    </main>
  ) : (
    <Loader styles='flex w-full flex-grow items-center justify-center overflow-hidden bg-[#ffff]' />
  )
}
