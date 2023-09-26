import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi'
import { useFetchRecipesInFavouriteQuery } from '../../../redux/recipes/recipesApi'

import { RecipesSectionHeading } from '../Recipes/RecipesSectionHeading'
import { Select } from '../../ui/Select'

import { declination, countFavouritesById } from '../../../helpers/'

import { categoriesData, sortOptions } from '../../../constants'

export const CategoryPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0])
  const { data: recipesData = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)
  const { data: favouritesData = [] } = useFetchRecipesInFavouriteQuery(null)
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
    <div className='container mx-auto flex-grow pl-4 pr-4'>
      <RecipesSectionHeading title={pageTitle} blockStyles='mb-6' />

      <p className='mb-7 xs:text-[0.9rem] sm:text-[1rem] md:text-lg'>{pageText}</p>

      <div className='mb-7 flex justify-between xs:flex-col md:flex-row'>
        <span className='] flex items-center rounded-lg border border-lines-blue text-center !font-[500] xs:mb-4 xs:p-4 xs:text-[0.9rem] sm:text-[1rem]'>
          {recipesFiltred.length} {recipeQuantity} из категории "{category}"
        </span>
        <Select options={sortOptions} value={selectedOption} onChange={setSelectedOption} />
      </div>

      <div className='grid gap-4  xs:grid-cols-1 s:grid-cols-2 lg:grid-cols-3'>
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
            if (selectedOption === 'По добавленным в избранные') {
              return (
                countFavouritesById(b.id, favouritesData) -
                countFavouritesById(a.id, favouritesData)
              )
            }
            return 0
          })
          .map((recipe) => {
            return (
              <Link to={`/reciept/${recipe.id}`} key={recipe.id}>
                <div className='flex h-full justify-center sm:justify-normal'>
                  <div className='group card w-96 cursor-pointer  rounded-lg bg-base-100'>
                    <figure>
                      <img
                        src={recipe.photoURL}
                        alt='picture'
                        className='transform rounded-lg transition-transform duration-1000 group-hover:scale-110'
                      />
                    </figure>
                    <div className='pb-4 pt-4'>
                      <h2 className='card-title font-normal text-dark-blue decoration-1 underline-offset-[5px] transition-colors duration-1000 group-hover:underline xs:text-sm sm:text-[1rem] md:text-lg'>
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
