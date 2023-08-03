import React from 'react'

type SectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='flex items-baseline pb-8 pt-8'>
      <h4 className='whitespace-nowrap font-playfair text-3xl font-semibold'>{title}</h4>
      <div className='ml-4 w-full'>
        <span className='mb-[5px] block h-[2px] bg-[#4A6385]'></span>
        <span className='block h-[1px] bg-[#4A6385]'></span>
      </div>
    </div>
  )
}
