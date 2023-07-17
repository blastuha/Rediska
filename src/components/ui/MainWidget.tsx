import React from 'react'
import { ArrowButton } from './ArrowButton'
import image from '../../assets/images/varenie.jpg'

export const MainWidget: React.FC = () => {
  return (
    <div className='flex max-w-full rounded-xl bg-[#E4F1FF]'>
      <div className='w-3/5 card w-100 bg-base-100 shadow-xl'>
        <img
          src={image}
          alt='Shoes'
          className='rounded-l-xl'
        />
      </div>
      <div className='w-2/5 p-10 relative'>
        <h1 className='text-4xl  mb-6 font-playfair font-extrabold'>
          Варенье из красной и черной смородины
        </h1>
        <p className='font-medium '>
          Красная и черная смородина появляются в нашей жизни в середине лета,
          живут с нами недолго, но жизнь эта краше некуда.
        </p>
        <div className='absolute right-10 bottom-4'>
          <ArrowButton />
        </div>
      </div>
    </div>
  )
}
