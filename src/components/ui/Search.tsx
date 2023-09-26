import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useFetchRecipesQuery } from '../../redux/recipes/recipesApi'
import { useDebounce } from '../../hooks/useDebounce'

import { RecipeData } from '../../models'

type SearchProp = {
  onSearchClose: () => void
}

export const Search: React.FC<SearchProp> = ({ onSearchClose }) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeData[]>([])
  const debouncedSearchValue = useDebounce(searchValue, 300)
  const { data: recipes = [] } = useFetchRecipesQuery(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    if (debouncedSearchValue) {
      const results = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      )
      setFilteredRecipes(results)
    } else {
      setFilteredRecipes([])
    }
  }, [debouncedSearchValue, recipes])

  return (
    <div className='container mx-auto pb-[12px]'>
      <div className='mb-4 flex justify-between   border-b border-line-gray'>
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleSearch}
          className='mr-4 w-full p-2 pb-[11px] focus:outline-none '
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-8 w-8 cursor-pointer text-dark-blue'
          onClick={onSearchClose}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div>
      {filteredRecipes.length > 0 && (
        <ul className='max-h-[460px] overflow-y-scroll'>
          {filteredRecipes.map((recipe) => {
            return (
              <Link to={`reciept/${recipe.id}`} key={recipe.id}>
                <li className='flex pb-4'>
                  <figure className='mr-4 h-[100px] max-w-[170px] overflow-hidden rounded-lg'>
                    <img
                      src={recipe.photoURL}
                      alt='recipe_pic'
                      className='h-full w-full object-cover'
                    />
                  </figure>
                  <span className='flex items-center'>{recipe.title}</span>
                </li>
              </Link>
            )
          })}
          {/* <Link to='/search' className='flex justify-center p-2'>
            <button className='btn max-w-[200px] border-0 bg-light-blue p-2 text-[12px] hover:bg-line-gray'>
              Open Search Page
            </button>
          </Link> */}
        </ul>
      )}
    </div>
  )
}
