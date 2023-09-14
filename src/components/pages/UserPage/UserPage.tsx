import React from 'react'

import { signOut } from 'firebase/auth'

import { auth } from '../../../api/firebase'
import { useActions } from '../../../hooks/useActions'

import avatar from '../../../assets/avatar.png'
import pot from '../../../assets/pot.svg'

export const UserPage: React.FC = () => {
  const { removeUser } = useActions()
  const currentUser = auth.currentUser

  const handleLoginOut = () => {
    signOut(auth)
      .then(() => {
        removeUser()
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className='container mx-auto flex flex-grow'>
      <div className='flex max-h-[400px] flex-col justify-between overflow-hidden border-r border-line-gray pr-10'>
        <img src={pot} alt='chef_pic' className='mb-6 h-3/4' />
        <p className='h-1/4 text-center text-lg'>
          Пока здесь ничего нет, но скоро здесь появятся рецепты, которые добавит
          <span className='font-bold'> {currentUser?.displayName}</span>
        </p>
      </div>

      <div className='mb-4 flex w-1/3 flex-col items-center'>
        <figure className='mb-4 flex max-w-[140px] flex-col items-center justify-center'>
          <img src={avatar} alt='avatar_pic' className='' />
          <figcaption className='mt-2 font-bold'>
            {currentUser?.displayName?.toUpperCase()}
          </figcaption>
        </figure>

        <ul className='mx-auto mb-4'>
          <li>
            <span>{currentUser?.email}</span>
          </li>
        </ul>

        <button className='btn border-0 bg-light-blue hover:bg-line-gray' onClick={handleLoginOut}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}
