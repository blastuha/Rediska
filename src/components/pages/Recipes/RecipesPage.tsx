import React from 'react'

import { Carousel } from './Carousel.tsx'

import { RecipesSection } from './RecipesSection.tsx'
import { RecipesCustomGrid } from './RecipesCustomGrid.tsx'
import { RecipesSectionHeading } from './RecipesSectionHeading.tsx'
import { TextRightCard } from './TextRightCard.tsx'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi.ts'
import { SpecialDientCard } from './TextBottomCard.tsx'
import { BgCard } from './BgCard.tsx'

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
          card={<TextRightCard />}
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
          gridStyles=' col-span-3 grid grid-cols-4 gap-4 text-xl font-extrabold'
          cardsQuantity={4}
          firstCardStyles='col-span-4 text-5xl text-center'
          card={<BgCard />}
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
          gridStyles='col-span-3 grid grid-cols-4 gap-6'
          cardsQuantity={3}
          card={<SpecialDientCard />}
        />
      </RecipesSection>

      <RecipesSection
        sectionStyles='grid h-fit grid-cols-3 gap-4 mb-16'
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
          gridStyles='col-span-3 grid grid-cols-3 gap-4'
          cardsQuantity={11}
          card={<TextRightCard />}
          filterWordsArr={['десерт', 'крамбл', 'маффин']}
        />
      </RecipesSection>
    </div>
  )
}
