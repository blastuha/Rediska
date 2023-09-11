import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchRecipesQuery } from '../../redux/recipes/recipesApi'

interface Recipe {
  id: number
  title: string
  ingredients: string
  description: string
}

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState<any>([])

  const { data: recipes = [], isLoading: isRecipesLoading } = useFetchRecipesQuery(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)

    if (event.target.value) {
      const results = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(event.target.value.toLowerCase()),
      )
      setFilteredRecipes(results)
    } else {
      setFilteredRecipes([])
    }
  }

  return (
    <div className='container mx-auto '>
      <div className='mb-4 flex justify-between   border-b border-b-dark-blue'>
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleSearch}
          className='mr-4 w-full p-2 focus:outline-none '
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-8 w-8 cursor-pointer text-dark-blue'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div>
      {filteredRecipes.length > 0 && (
        <ul className='overflow-y-auto'>
          {filteredRecipes.map((recipe, i: number) => {
            if (i <= 3) {
              return (
                <li key={recipe.id} className='flex pb-4'>
                  <figure className='mr-4 h-[100px] max-w-[170px] overflow-hidden'>
                    <img
                      src={recipe.photoURL}
                      alt='recipe_pic'
                      className='h-full w-full object-cover'
                    />
                  </figure>
                  <span className='flex items-center'>{recipe.title}</span>
                </li>
              )
            }
          })}
          <Link to='/recipes' className='flex justify-center p-2'>
            <button className='btn max-w-[200px] border-0 bg-light-blue p-2 text-[12px] hover:bg-line-gray'>
              See all results
            </button>
          </Link>
        </ul>
      )}
    </div>
  )
}
