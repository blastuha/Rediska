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
    <div className='container mx-auto flex  flex-grow flex-col-reverse pl-4 pr-4 md:flex-row'>
      <div className='flex flex-col justify-between    md:border-r md:border-line-gray md:pr-4  lg:pr-10'>
        <img
          src={pot}
          alt='chef_pic'
          className='mb-6 max-w-[200px] self-center xs:h-1/4 md:h-3/4'
        />
        <p className='h-1/4 text-center xs:text-[0.9rem] sm:text-[1rem] md:text-lg'>
          Пока здесь ничего нет, но скоро появится функционал добавления собственного рецепта от
          <span className='font-bold'> {currentUser?.displayName}</span>
        </p>
      </div>

      <hr className='mb-6 mt-4 text-line-gray' />

      <div className='mb-4 flex flex-col items-center self-center  md:w-1/3 md:pl-4'>
        <figure className='mb-4 flex max-w-[140px] flex-col items-center justify-center'>
          <img src={avatar} alt='avatar_pic' className='' />
          <figcaption className='mt-2 font-bold'>
            {currentUser?.displayName?.toUpperCase()}
          </figcaption>
        </figure>

        <ul className='mx-auto mb-4 flex items-center'>
          <li>
            <span>{currentUser?.email}</span>
          </li>
        </ul>

        <button
          className='btn border-0 bg-light-blue hover:bg-line-gray xs:text-[0.8rem] sm:text-[0.9rem]'
          onClick={handleLoginOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}
