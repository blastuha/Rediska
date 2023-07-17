import React from 'react'
import { FooterContent } from '../ui/FooterContent'

export const Footer: React.FC = () => {
  return (
    <footer className='bg-[#F9F9F9] pb-5 pt-5'>
      <div className='flex justify-between container max-w-1140 mx-auto  mb-5'>
        <FooterContent />
        <div className='flex justify-between border-2 border-solid border-sky-500'>
          <ul className='pr-20'>
            <li className='pb-1'>Rediska</li>
            <li className='text-sm text-[#7F7F7F] pb-1 cursor-pointer'>
              About us
            </li>
            <li className='text-sm text-[#7F7F7F] pb-1 cursor-pointer'>
              Careers
            </li>
            <li className='text-sm text-[#7F7F7F] pb-1 cursor-pointer'>
              Contact us
            </li>
            <li className='text-sm text-[#7F7F7F] pb-1 cursor-pointer'>
              Feedback
            </li>
          </ul>

          <ul className='pr-20'>
            <li>Rediska</li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>About us</li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>Careers</li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>
              Contact us
            </li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>Feedback</li>
          </ul>

          <ul>
            <li>Rediska</li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>About us</li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>Careers</li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>
              Contact us
            </li>
            <li className='text-sm text-[#7F7F7F] cursor-pointer'>Feedback</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
