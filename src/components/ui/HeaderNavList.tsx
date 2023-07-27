import React from 'react'
import { Link } from 'react-router-dom'

type HeaderNavigation = {
  name: string
  link: string
}

const headerNavigation: HeaderNavigation[] = [
  { name: 'Главная', link: '/' },
  { name: 'Рецепты', link: '/reciepts' },
  { name: 'Хиты сезона', link: '/hits' },
]

export const HeaderNavList: React.FC = () => {
  return (
    <ul className='flex'>
      {headerNavigation.map((item, i) => {
        return (
          <Link
            to={item.link}
            className='mr-8 cursor-pointer font-inter last:mr-0 self-center'
          >
            <li key={i}>{item.name}</li>
          </Link>
        )
      })}
    </ul>
  )
}
