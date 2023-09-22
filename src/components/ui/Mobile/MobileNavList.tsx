import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { headerNavigation } from '../../../constants'
import { Lines } from '../Lines'

const slideDown = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
}

export const MobileNavList: React.FC<{ handleMobileNav: () => void }> = ({ handleMobileNav }) => {
  return (
    <motion.div
      // key='mobileNav'
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
          <li className='pb-2 pl-4 pr-4 pt-2' onClick={handleMobileNav} key={i}>
            <Link to={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Lines firstLineHeight='h-[1px]' />
    </motion.div>
  )
}
