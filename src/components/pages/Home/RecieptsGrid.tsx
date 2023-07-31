import React from 'react'
import { Link } from 'react-router-dom'
import { RecieptsData } from '../../../models'

type RecieptsGridProps = {
  recieptsData: RecieptsData[]
}

export const RecieptsGrid: React.FC<RecieptsGridProps> = ({ recieptsData }) => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      {recieptsData.map((reciept) => {
        return (
          <Link to={`/reciept/${reciept.id}`} key={reciept.id}>
            <div className='flex h-full '>
              <div className='group card w-96 cursor-pointer  rounded-lg bg-base-100'>
                <figure>
                  <img
                    src={reciept.photoURL}
                    alt='picture'
                    className='transform rounded-lg transition-transform duration-700 group-hover:scale-110'
                  />
                </figure>
                <div className='flex flex-auto flex-col justify-between pb-4 pt-4'>
                  <h2 className='card-title text-base-content  transition-colors duration-700 group-hover:text-[#E84A43]'>
                    {reciept.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
