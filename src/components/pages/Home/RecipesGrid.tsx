import React from 'react'
import { Link } from 'react-router-dom'
import { RecipeData } from '../../../models'

type RecipesGridProps = {
  recipesData: RecipeData[]
}

export const RecipesGrid: React.FC<RecipesGridProps> = ({ recipesData }) => {
  //вынести card
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      {recipesData.map((recipe) => {
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
                  <h2 className='card-title font-normal text-base-content transition-colors duration-1000 group-hover:underline'>
                    {recipe.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
