import React from 'react'
import { ArrowButton } from '../../ui/ArrowButton.tsx'
import { WidgetNewsData } from '../../../models'

export const SwiperCard: React.FC<WidgetNewsData> = ({ title, photoURL, smallText, id }) => {
  return (
    <div className='flex h-full max-w-full rounded-lg bg-light-blue xs:flex-col sm:min-h-[368px] lg:flex-row'>
      <div className='card bg-base-100 shadow-xl xs:w-full lg:w-3/5'>
        <img
          src={photoURL}
          alt='Shoes'
          className='h-full w-full object-cover xs:rounded-tl-lg xs:rounded-tr-lg lg:rounded-bl-lg  lg:rounded-tr-none'
        />
      </div>

      <div className='relative flex max-h-[388px] grow  flex-col  xs:w-full xs:p-4 xs:pb-10 sm:p-10  lg:w-[56%] xl:w-2/5'>
        <h1 className='line-clamp-4  max-h-[144px]   font-playfair font-extrabold xs:mb-2 xs:text-xl s:mb-6 s:text-3xl'>
          {title}
        </h1>
        <p className='max-h-[96px] font-medium xs:mb-6 xs:line-clamp-4 xs:text-sm md:mb-0 md:line-clamp-none md:text-sm'>
          {smallText}
        </p>
        <div className='absolute bottom-3 right-6'>
          <ArrowButton id={id} />
        </div>
      </div>
    </div>
  )
}
