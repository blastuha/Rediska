import React from 'react'
import { Logo } from '../ui/Logo'
import { HeaderNavList } from '../ui/HeaderNavList'
import { HeaderNavIcons } from '../ui/HeaderNavIcons'

export const Header: React.FC = () => {
  return (
    <header className=' pt-3 pb-3 shadow-lg'>
      <div className='flex justify-between container mx-auto pl-4 pr-4'>
        <Logo />
        <HeaderNavList />
        <HeaderNavIcons />
      </div>
    </header>
  )
}
