import React from 'react'
import { SectionTitle } from './SectionTitle'
import image from '../../assets/images/varenie.jpg'

export const NewsSection: React.FC = () => {
  return (
    <div>
      <SectionTitle title='Сюжеты недели' />
      <div className='flex'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure>
            <img
              src={image}
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <div className='badge badge-primary bg-[#0d0e43]'>
                Потребляй разумно
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
