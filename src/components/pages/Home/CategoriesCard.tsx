import React from 'react'

type CategoriesCardProp = {
  photoURL: string
  name: string
  recieptsTotal: string
}

export const CategoriesCard: React.FC<CategoriesCardProp> = ({ photoURL, name, recieptsTotal }) => {
  return (
    <div className='group card max-w-full bg-base-100 shadow-xl'>
      <figure className='flex max-h-[420px] max-w-full'>
        <img src={photoURL} alt='categoryImg' className='min-h-[420px] max-w-full object-cover' />
      </figure>
      <div className='card-body flex flex-row justify-between'>
        <h2 className='bold card-title font-playfair text-[36px]'>{name}</h2>
        <button className='btn'>
          Рецептов
          <div className='badge'>{recieptsTotal}</div>
        </button>
      </div>
    </div>
  )
}
