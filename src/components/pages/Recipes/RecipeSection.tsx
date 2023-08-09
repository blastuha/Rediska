import React from 'react'
import { RecipesSectionTitle } from './RecipesSectionTitle'

type RecipeSectionProps = {
  // reciepts: RecieptsData[]
  children: React.ReactElement
}

export const RecipeSection: React.FC<RecipeSectionProps> = ({ children }) => {
  return (
    <section className='grid h-fit grid-cols-3 gap-6'>
      <RecipesSectionTitle
        title='MOST POPULAR'
        subtitle='Must try dishes.'
        blockStyles='col-span-3 row-span-1'
      />
      {children}
    </section>
  )
}
