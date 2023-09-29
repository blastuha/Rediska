import React from 'react'
import { Link } from 'react-router-dom'

type WeekPlotsCardProps = {
  id: string
  photoURL: string
  title: string
}

export const WeekPlotsCard: React.FC<WeekPlotsCardProps> = ({ id, photoURL, title }) => {
  return (
    <Link to={`weekPlot/${id ? id : ''}`}>
      <div className='flex h-full justify-center'>
        <div className='group relative  flex w-96 cursor-pointer flex-col  justify-between  bg-base-100'>
          <figure className=' mb-3 overflow-hidden rounded-lg'>
            <img
              src={photoURL}
              alt='picture'
              className='transform  transition-transform duration-1000 group-hover:scale-110'
            />
          </figure>
          <div className='card-body justify-between p-0'>
            <h2 className='flex items-center  text-dark-blue decoration-1  underline-offset-[5px] transition-colors duration-1000 group-hover:underline xs:text-[1rem] xs:leading-tight  md:leading-normal'>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}
