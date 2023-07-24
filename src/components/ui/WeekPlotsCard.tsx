import React from 'react'
import { Link } from 'react-router-dom'

type WeekPlotsCardProps = {
  id: string
  photoURL: string
  title: string
  category: string
}

export const WeekPlotsCard: React.FC<WeekPlotsCardProps> = ({
  id,
  photoURL,
  title,
  category,
}) => {
  console.log(id)
  return (
    <Link to={`weekPlot/${id}`}>
      <div className='flex h-full'>
        <div className='card w-96 bg-base-100 shadow-xl  group  cursor-pointer'>
          <figure>
            <img
              src={photoURL}
              alt='Shoes'
              className='transition-transform transform group-hover:scale-110 duration-700'
            />
          </figure>
          <div className='card-body flex flex-col justify-between'>
            <h2 className='card-title transition-colors  text-base-content group-hover:text-[#E84A43] duration-700'>
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
