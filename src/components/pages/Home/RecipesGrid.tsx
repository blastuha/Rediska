import React from 'react'
import { Link } from 'react-router-dom'
import { RecipeData } from '../../../models'

type RecipesGridProps = {
  recipesData: RecipeData[]
}

export const RecipesGrid: React.FC<RecipesGridProps> = ({ recipesData }) => {
  //вынести card
  return (
    <div className='grid grid-rows-2 gap-4 xs:grid-cols-1 s:grid-cols-2 md:grid-cols-3'>
      {recipesData.map((recipe) => {
        return (
          <Link to={`/reciept/${recipe.id}`} key={recipe.id}>
            <div className='flex h-full justify-center'>
              <div className='group card w-96 cursor-pointer  rounded-lg bg-base-100'>
                <figure>
                  <img
                    src={recipe.photoURL}
                    alt='picture'
                    className='transform rounded-lg transition-transform duration-1000 group-hover:scale-110'
                  />
                </figure>
                <div className='flex justify-between xs:pb-2 xs:pt-2 md:pb-4 md:pt-4'>
                  <h2 className='card-title font-normal text-dark-blue decoration-1 underline-offset-[5px] transition-colors duration-1000 group-hover:underline xs:text-[1rem] xs:leading-tight'>
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
