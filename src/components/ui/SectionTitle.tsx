import React from 'react'
import { Lines } from './Lines'

type SectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='flex items-baseline pb-8 pt-8'>
      <h4 className='whitespace-nowrap font-playfair text-3xl font-semibold'>{title}</h4>
      <div className='ml-4 w-full'>
        <Lines firstLineHeight='h-[2px]' />
      </div>
    </div>
  )
}
