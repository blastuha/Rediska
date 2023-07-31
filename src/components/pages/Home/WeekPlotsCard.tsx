/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

type WeekPlotsCardProps = {
  id: string
  photoURL: string
  title: string
  category: string
}

export const WeekPlotsCard: React.FC<WeekPlotsCardProps> = ({ id, photoURL, title, category }) => {
  return (
    <Link to={`weekPlot/${id ? id : ''}`}>
      <div className='flex h-full'>
        <div className='group card w-96 cursor-pointer  rounded-lg  bg-base-100 shadow-xl'>
          <figure>
            <img
              src={photoURL}
              alt='picture'
              className='transform transition-transform duration-700 group-hover:scale-110'
            />
          </figure>
          <div className='card-body flex flex-col justify-between'>
            <h2 className='card-title text-base-content  transition-colors duration-700 group-hover:text-[#E84A43]'>
              {title}
            </h2>
            <div className='card-actions'>
              <div className='badge bg-[#E8C015] text-white'>{category}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
