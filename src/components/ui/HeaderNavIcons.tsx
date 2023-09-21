import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from './Icons/Heart'
import { Search } from './Icons/Search'
import { Person } from './Icons/Person'

type HeaderNavIconsProp = {
  onSearchVisible: () => void
  windowWidth: number
}

export const HeaderNavIcons: React.FC<HeaderNavIconsProp> = ({ onSearchVisible, windowWidth }) => {
  return (
    <div className='flex cursor-pointer self-center '>
      <div onClick={onSearchVisible} className='mr-2 '>
        <Search
          styles={`w-${
            windowWidth >= 576 ? 6 : 7
          } h-6hover:scale-110 transition-all duration-300 ease-in`}
        />
      </div>

      {windowWidth >= 576 && (
        <Link to='favourites'>
          <Heart styles='w-6 h-6 mr-2 hover:scale-110 transition-all duration-300 ease-in' />
        </Link>
      )}

      {windowWidth >= 576 && (
        <Link to='user'>
          <Person styles='w-6 h-6 hover:scale-110 transition-all duration-300 ease-in' />
        </Link>
      )}

      {windowWidth < 576 && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-${
            windowWidth >= 576 ? 6 : 7
          } h-6hover:scale-110 transition-all duration-300 ease-in`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      )}
    </div>
  )
}
