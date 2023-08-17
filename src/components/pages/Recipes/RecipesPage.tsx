import React from 'react'

import { Carousel } from './Carousel.tsx'

import { RecipesSection } from './RecipesSection.tsx'
import { RecipesCustomGrid } from './RecipesCustomGrid.tsx'
import { RecipesSectionHeading } from './RecipesSectionHeading.tsx'
import { MostPopularCard } from './MostPopularCard.tsx'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi.ts'
import { SpecialDientCard } from './SpecialDietCard.tsx'
import { ProteinCard } from './ProteinCard.tsx'

export const RecipesPage: React.FC = () => {
  const { data: recipesData = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)

  return (
    <div className='container mx-auto flex-grow'>
      <Carousel blockStyles='relative mb-10 mt-0' />
      <RecipesSection
        sectionStyles='grid h-fit grid-cols-3 gap-4 mb-16'
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
          gridStyles='col-span-2 grid grid-cols-2 gap-4'
          cardsQuantity={7}
          adBlock={<h2 className='col-start-3 col-end-3'>Рекламный блок</h2>}
          card={<MostPopularCard />}
        />
      </RecipesSection>
      <RecipesSection
        sectionStyles='grid h-fit grid-cols-3 gap-4 mb-16'
        sectionHeading={
          <RecipesSectionHeading
            title='PICK YOUR PROTEIN'
            subtitle='Beef, chicken, pork—we`ve got it all.'
            blockStyles='col-span-3 row-span-1'
          />
        }
      >
        <RecipesCustomGrid
          recipesData={recipesData}
          gridStyles=' col-span-4 grid grid-cols-4 gap-4 text-xl font-extrabold'
          cardsQuantity={4}
          firstCardStyles='col-span-4 text-5xl text-center'
          card={<ProteinCard />}
          filterWordsArr={['диетический', 'кето', 'веган']}
        />
      </RecipesSection>
      <RecipesSection
        sectionStyles='grid h-fit grid-cols-3 gap-4 mb-16'
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
          gridStyles='col-span-4 grid grid-cols-4 gap-6'
          cardsQuantity={3}
          card={<SpecialDientCard />}
        />
      </RecipesSection>
    </div>
  )
}
