import React from 'react'
import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <h1 className='cursor-pointer font-dancingScript text-[40px] font-bold text-[#0D0E43]'>
        Rediska
      </h1>
    </Link>
  )
}
