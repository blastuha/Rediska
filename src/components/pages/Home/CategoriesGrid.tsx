import React from 'react'
import { categoriesData } from '../../../constants/'
import { CategoriesCard } from './CategoriesCard'

export const CategoriesGrid: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      {categoriesData.map((category) => {
        return <CategoriesCard {...category} />
      })}
    </div>
  )
}
