import React from 'react'
import { FooterContent } from '../ui/FooterContent'

export const Footer: React.FC = () => {
  return (
    <footer className='mt-14 bg-[#F9F9F9] pb-5 pt-5'>
      <div className='container mx-auto flex pl-4 pr-4'>
        <FooterContent />
        <div className='w-1/5 '>
          <ul className='pr-8'>
            <li className='pb-2'>Rediska</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Главная</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Рецепты</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Хиты сезона</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>О нас</li>
          </ul>
        </div>

        <div className='w-1/5 '>
          <ul className=''>
            <li className='pb-2'>Follow</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Github</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Instagram</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Telegram</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Youtube</li>
          </ul>
        </div>

        <div className='w-1/5 '>
          <ul className='pr-8'>
            <li className='pb-2'>Проект</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>О Проекте</li>
            <li className='cursor-pointer pb-2 text-sm text-[#7F7F7F]'>Связь с нами</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
