import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lines } from '../Lines'
import { headerNavigation, slideDown } from '../../../constants'

export const MobileNavList: React.FC<{ handleMobileNav: () => void }> = ({ handleMobileNav }) => {
  return (
    <div>
      <motion.div
        className='container mx-auto'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={slideDown}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      >
        <ul className=''>
          {headerNavigation.map((navItem, i) => (
            <li className='flex pb-2 pl-4 pr-4 pt-2' onClick={handleMobileNav} key={i}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-2 h-4 w-4 self-center'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <Lines firstLineHeight='h-[0px]' />
    </div>
  )
}
