import React from 'react'
import { Link } from 'react-router-dom'
import { RecieptsData } from '../../../models'

type RecieptsGridProps = {
  recieptsData: RecieptsData[]
}

export const RecieptsGrid: React.FC<RecieptsGridProps> = ({ recieptsData }) => {
  //вынести card
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
                    className='transform rounded-lg transition-transform duration-1000 group-hover:scale-110'
                  />
                </figure>
                <div className='pb-4 pt-4'>
                  <h2 className='card-title font-normal text-base-content transition-colors duration-1000 group-hover:underline'>
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
