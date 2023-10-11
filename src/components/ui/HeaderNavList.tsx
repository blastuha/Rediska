import React from 'react'
import { Link } from 'react-router-dom'

type HeaderNavigation = {
  name: string
  link: string
}

const headerNavigation: HeaderNavigation[] = [
  { name: 'Главная', link: '/' },
  { name: 'Рецепты', link: '/recipes' },
  { name: 'О проекте', link: '/about' },
]

export const HeaderNavList: React.FC = () => {
  return (
    <ul className='flex  text-[#444]'>
      {headerNavigation.map((item, i) => {
        return (
          <Link
            to={item.link}
            key={i}
            className='group mb-[-4px] cursor-pointer self-center border-r  border-navy-blue pl-4 pr-4 font-inter last:mr-0 last:border-r-0'
          >
            <li className='transition-colors duration-150 ease-in group-hover:border-b group-hover:text-lines-blue'>
              {item.name}
            </li>
            <div className='mt-[2px] group-hover:border-b group-hover:text-lines-blue'></div>
          </Link>
        )
      })}
    </ul>
  )
}
