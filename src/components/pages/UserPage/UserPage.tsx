import React from 'react'

import { useAppSelector } from '../../../hooks/useAppSelector'
import { getAuth } from 'firebase/auth'

import avatar from '../../../../public/avatar.png'
import pot from '../../../../public/pot.svg'

export const UserPage: React.FC = () => {
  const { email, id, token } = useAppSelector((state) => state.user)
  const auth = getAuth().currentUser

  return (
    <div className='container mx-auto flex flex-grow'>
      <div className='flex max-h-[400px] flex-col justify-between overflow-hidden border-r border-line-gray pr-10'>
        <img src={pot} alt='chef_pic' className='mb-6 h-3/4' />
        <p className='h-1/4 text-center text-lg'>
          Пока здесь ничего нет, но скоро здесь появятся рецепты, истории, фотографии, которые
          добавит
          <span className='font-bold'> {auth?.displayName}</span>
        </p>
      </div>

      <div className='mb-4 flex w-1/3 flex-col items-center'>
        <figure className='mb-4 flex max-w-[140px] flex-col items-center justify-center'>
          <img src={avatar} alt='avatar_pic' className='' />
          <figcaption className='mt-2 font-bold'>{auth?.displayName?.toUpperCase()}</figcaption>
        </figure>

        <ul className='mx-auto mb-4'>
          <li>
            <span>{auth?.email}</span>
          </li>
        </ul>

        <button className='btn border-0 bg-light-blue hover:bg-line-gray'>Выйти из аккаунта</button>
      </div>
    </div>
  )
}
