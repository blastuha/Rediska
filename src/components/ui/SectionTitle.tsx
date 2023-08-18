import React from 'react'
import { Lines } from './Lines'

type SectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='flex items-baseline pb-6 text-dark-blue'>
      <h4 className='whitespace-nowrap font-playfair text-[2.5rem]'>{title}</h4>
      <div className='ml-4 w-full'>
        <Lines firstLineHeight='h-[2px]' />
      </div>
    </div>
  )
}
