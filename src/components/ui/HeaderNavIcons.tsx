import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from './Icons/Heart'
import { Search } from './Icons/Search'
import { Person } from './Icons/Person'

export const HeaderNavIcons: React.FC = () => {
  return (
    <div className='flex cursor-pointer self-center'>
      <Search styles='w-6 h-6 mr-2' />

      <Heart styles='w-6 h-6 mr-2' />

      <Link to='signin'>
        <Person styles='w-6 h-6' />
      </Link>
    </div>
  )
}
