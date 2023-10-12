import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useFetchRecipesQuery } from '../../redux/recipes/recipesApi'
import { useDebounce } from '../../hooks/useDebounce'
import { slideDown, listItemTransition } from '../../constants'
import { RecipeData } from '../../models'

type SearchProp = {
  onSearchClose: () => void
}

export const Search: React.FC<SearchProp> = ({ onSearchClose }) => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 300)
  const { data: recipes = [] } = useFetchRecipesQuery(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const filteredRecipes: RecipeData[] = useMemo(() => {
    if (debouncedSearchValue) {
      return recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      )
    } else {
      return []
    }
  }, [recipes, debouncedSearchValue])

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
        <motion.ul
          className='max-h-[460px] overflow-y-scroll'
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={slideDown}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          {filteredRecipes.map((recipe) => {
            return (
              <Link to={`reciept/${recipe.id}`} key={recipe.id} onClick={onSearchClose}>
                <motion.li
                  className='flex pb-4'
                  variants={listItemTransition}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  <figure className='mr-4 h-[100px] max-w-[170px] overflow-hidden rounded-lg xs:w-2/5'>
                    <img
                      src={recipe.photoURL}
                      alt='recipe_pic'
                      className='h-full w-full object-cover'
                      loading='lazy'
                    />
                  </figure>
                  <span className='flex items-center xs:w-3/5'>{recipe.title}</span>
                </motion.li>
              </Link>
            )
          })}
        </motion.ul>
      )}
    </div>
  )
}
