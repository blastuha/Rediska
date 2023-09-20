import React from 'react'
import { ContentHeading } from '../../ui/ContentHeading'
import { MarkDown } from '../../ui/MarkDown/MarkDown'
import { useFetchSelectionOfRecipesByIdQuery } from '../../../redux/recipes/recipesApi'

export const SelectionOfRecipes = () => {
  const { data: selectionOfRecipes, isLoading } =
    useFetchSelectionOfRecipesByIdQuery('HW1oQrycB8lZiQNURo3i')

  console.log(selectionOfRecipes)

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <ContentHeading
        title='Пять интересных и очень-очень быстрых блюд на всю неделю'
        date='2023-09-23'
      />
      <MarkDown content={selectionOfRecipes?.text} />
    </main>
  )
}
