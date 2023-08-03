import React from 'react'
import { Link } from 'react-router-dom'

type HeaderNavigation = {
  name: string
  link: string
}

const headerNavigation: HeaderNavigation[] = [
  { name: 'Главная', link: '/' },
  { name: 'Рецепты', link: '/recipes' },
  { name: 'Хиты сезона', link: '/hits' },
]

export const HeaderNavList: React.FC = () => {
  return (
    <ul className='flex'>
      {headerNavigation.map((item, i) => {
        return (
          <Link
            to={item.link}
            key={i}
            className='cursor-pointer self-center border-r border-[#1F2937] pl-4  pr-4 font-inter last:mr-0 last:border-r-0'
          >
            <li className='hover:text-[#4A6385] hover:underline'>{item.name}</li>
          </Link>
        )
      })}
    </ul>
  )
}
