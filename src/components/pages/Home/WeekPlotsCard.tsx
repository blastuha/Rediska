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
        <div className='group flex  w-96 cursor-pointer flex-col justify-between  bg-base-100'>
          <figure className='mb-3 overflow-hidden rounded-lg'>
            <img
              src={photoURL}
              alt='picture'
              className='transform  transition-transform duration-1000 group-hover:scale-110'
            />
          </figure>
          <div className='card-body justify-between p-0'>
            <h2 className='flex items-center  text-[1.15rem]  text-dark-blue decoration-1 underline-offset-[5px] transition-colors duration-1000 group-hover:underline'>
              {title}
            </h2>
            <div className='card-actions'>
              <div className='mb-2 rounded-lg bg-[#00527828] pb-1 pl-2 pr-2 pt-1 text-sm text-[#005278]'>
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
