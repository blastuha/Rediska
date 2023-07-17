import React from 'react'
import { FooterContent } from '../ui/FooterContent'

export const Footer: React.FC = () => {
  return (
    <footer className='bg-[#F9F9F9] pb-5 pt-5'>
      <div className='flex container mx-auto pl-4 pr-4'>
        <FooterContent />
        <div className='w-1/5 '>
          <ul className='pr-8'>
            <li className='pb-2'>Rediska</li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Главная
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Рецепты
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Хиты сезона
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              О нас
            </li>
          </ul>
        </div>

        <div className='w-1/5 '>
          <ul className='pr-8'>
            <li className='pb-2'>Legal</li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Связь с нами
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Реклама
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Стек технологий
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Авторы проекта
            </li>
          </ul>
        </div>

        <div className='w-1/5 '>
          <ul className=''>
            <li className='pb-2'>Follow</li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Github
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Instagram
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Telegram
            </li>
            <li className='text-sm text-[#7F7F7F] pb-2 cursor-pointer'>
              Youtube
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
