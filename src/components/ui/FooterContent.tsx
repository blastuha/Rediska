import React from 'react'
import { Logo } from './Logo'

export const FooterContent: React.FC = () => {
  return (
    <div className='flex flex-col w-2/3 max-w-xl pr-40'>
      <Logo />
      <p className='mt-3 text-gray-500'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quae
        minima provident pariatur soluta, id cupiditate voluptatibus dicta
        numquam? Libero!
      </p>
    </div>
  )
}
