import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi'

import { RecipesSectionHeading } from '../Recipes/RecipesSectionHeading'
import { Select } from '../../ui/Select'

import { declination } from '../../../helpers/declination'

import { categoriesData } from '../../../constants'

export const CategoryPage: React.FC = () => {
  const sortOptions = [
    'По дате',
    // 'По добавлению в избранные',
    'По названию asc',
    'По названию desc',
  ]
  const [selectedOption, setSelectedOption] = useState(sortOptions[0])
  console.log(selectedOption)
  const { data: recipesData = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)
  const { category } = useParams()

  const recipesFiltred = recipesData.filter((recipe) => {
    return recipe.category === category
  })

  const pageTitle = categoriesData
    .map((categoryObj) => {
      if (categoryObj.name === category) {
        return categoryObj.name
      } else {
        return ''
      }
    })
    .join('')

  const pageText = categoriesData
    .map((categoryObj) => {
      if (categoryObj.name === category) {
        return categoryObj.pageText
      } else {
        return
      }
    })
    .join('')

  const recipeQuantity = declination(recipesFiltred.length, ['рецепт', 'рецепта', 'рецептов'])

  return (
    <div className='container mx-auto flex-grow'>
      <RecipesSectionHeading title={pageTitle} blockStyles='mb-6' />

      <p className='mb-7 text-lg'>{pageText}</p>

      <div className='mb-7 flex justify-between'>
        <span className='flex items-center rounded-lg border border-lines-blue pl-4 pr-4 text-center font-[500]'>
          {recipesFiltred.length} {recipeQuantity} из категории "{category}"
        </span>
        <Select options={sortOptions} value={selectedOption} onChange={setSelectedOption} />
      </div>

      <div className='grid grid-cols-3 grid-rows-2 gap-4'>
        {recipesFiltred
          .sort((a, b) => {
            if (selectedOption === 'По дате') {
              return new Date(b.date).getTime() - new Date(a.date).getTime()
            }
            if (selectedOption === 'По названию asc') {
              if (a.title > b.title) return 1
            }
            if (selectedOption === 'По названию desc') {
              if (a.title > b.title) return -1
            }
            return 0
          })
          .map((recipe) => {
            return (
              <Link to={`/reciept/${recipe.id}`} key={recipe.id}>
                <div className='flex h-full '>
                  <div className='group card w-96 cursor-pointer  rounded-lg bg-base-100'>
                    <figure>
                      <img
                        src={recipe.photoURL}
                        alt='picture'
                        className='transform rounded-lg transition-transform duration-1000 group-hover:scale-110'
                      />
                    </figure>
                    <div className='pb-4 pt-4'>
                      <h2 className='card-title font-normal text-dark-blue decoration-1 underline-offset-[5px] transition-colors duration-1000 group-hover:underline'>
                        {recipe.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
