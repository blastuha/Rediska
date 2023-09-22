import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { headerNavigation } from '../../../constants'

const slideDown = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
}

export const MobileNavList: React.FC<{ handleMobileNav: () => void }> = ({ handleMobileNav }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={slideDown}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <ul className=''>
        {headerNavigation.map((navItem) => (
          <li className='pb-2 pl-4 pr-4 pt-2' onClick={handleMobileNav} key={navItem.name}>
            <Link to={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
