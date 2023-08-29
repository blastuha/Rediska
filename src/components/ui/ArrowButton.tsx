import React from 'react'
import { Arrow } from './Icons/Arrow'

export const ArrowButton: React.FC = () => {
  return (
    <button className='btn btn-circle btn-outline'>
      <Arrow />
    </button>
  )
}
