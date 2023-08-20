import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useFetchRecipesQuery } from '../../../redux/recipes/recipesApi'

export const CategoryPage: React.FC = () => {
  const { data: recipesData = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)
  const { category } = useParams()

  const recipesFiltred = recipesData.filter((recipe) => {
    return recipe.category === category
  })

  return (
    <div className='container mx-auto flex-grow'>
      <div className='grid grid-cols-3 grid-rows-2 gap-4'>
        {recipesFiltred.map((recipe) => {
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
