import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from './Icons/Heart'
import { Search } from './Icons/Search'
import { Person } from './Icons/Person'

type HeaderNavIconsProp = {
  onSearchVisible: () => void
}

export const HeaderNavIcons: React.FC<HeaderNavIconsProp> = ({ onSearchVisible }) => {
  return (
    <div className='flex cursor-pointer self-center'>
      <div onClick={onSearchVisible}>
        <Search styles='w-6 h-6 mr-2' />
      </div>

      <Link to='favourites'>
        <Heart styles='w-6 h-6 mr-2' />
      </Link>

      <Link to='user'>
        <Person styles='w-6 h-6' />
      </Link>
    </div>
  )
}
