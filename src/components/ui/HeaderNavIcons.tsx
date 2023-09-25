import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from './Icons/Heart'
import { Search } from './Icons/Search'
import { Person } from './Icons/Person'
import { BurgerMenu } from './Icons/BurgerMenu'

type HeaderNavIconsProp = {
  onSearchVisible: () => void
  handleMobileNav: () => void
  windowWidth: number
}

export const HeaderNavIcons: React.FC<HeaderNavIconsProp> = ({
  onSearchVisible,
  windowWidth,
  handleMobileNav,
}) => {
  return (
    <div className='flex cursor-pointer self-center '>
      <div onClick={onSearchVisible} className='mr-2 '>
        <Search
          styles={`w-${
            windowWidth >= 768 ? 6 : 7
          } h-6 hover:scale-110 transition-all duration-300 ease-in`}
        />
      </div>

      {windowWidth >= 768 && (
        <Link to='favourites'>
          <Heart styles='w-6 h-6 mr-2 hover:scale-110 transition-all duration-300 ease-in' />
        </Link>
      )}

      {windowWidth >= 768 && (
        <Link to='user'>
          <Person styles='w-6 h-6 hover:scale-110 transition-all duration-300 ease-in' />
        </Link>
      )}

      {windowWidth < 768 && <BurgerMenu handleMobileNav={handleMobileNav} />}
    </div>
  )
}
