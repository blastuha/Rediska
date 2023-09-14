import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './Icons/Arrow'

export const ArrowButton: React.FC<{ id: string }> = ({ id }) => {
  return (
    <button className='btn btn-circle btn-outline'>
      <Link to={`/newsPage/${id}`}>
        <Arrow />
      </Link>
    </button>
  )
}
