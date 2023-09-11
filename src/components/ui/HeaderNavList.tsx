import React from 'react'
import { Link } from 'react-router-dom'

type HeaderNavigation = {
  name: string
  link: string
}

const headerNavigation: HeaderNavigation[] = [
  { name: 'Главная', link: '/' },
  { name: 'Рецепты', link: '/recipes' },
  { name: 'О нас', link: '/hits' },
]

export const HeaderNavList: React.FC = () => {
  return (
    <ul className='flex  text-dark-blue'>
      {headerNavigation.map((item, i) => {
        return (
          <Link
            to={item.link}
            key={i}
            className='cursor-pointer self-center border-r border-navy-blue pl-4  pr-4 font-inter last:mr-0 last:border-r-0'
          >
            <li className='hover:text-navy-blue hover:underline'>{item.name}</li>
          </Link>
        )
      })}
    </ul>
  )
}
