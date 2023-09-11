import React, { useState } from 'react'
import { Logo } from '../ui/Logo'
import { HeaderNavList } from '../ui/HeaderNavList'
import { HeaderNavIcons } from '../ui/HeaderNavIcons'
import { Lines } from '../ui/Lines'
import { Search } from '../ui/Search'

export const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <header className='mb-10 pb-3 pt-3'>
      <div className='container mx-auto flex justify-between pb-3 pl-4 pr-4'>
        <Logo />
        <HeaderNavList />
        <HeaderNavIcons />
      </div>
      <Search />
      <Lines firstLineHeight='h-[1px]' />
    </header>
  )
}
