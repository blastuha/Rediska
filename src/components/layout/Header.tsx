import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Logo } from '../ui/Logo'
import { HeaderNavList } from '../ui/HeaderNavList'
import { HeaderNavIcons } from '../ui/HeaderNavIcons'
import { Lines } from '../ui/Lines'
import { Search } from '../ui/Search'
import { MobileNavList } from '../ui/Mobile/MobileNavList'

import { useWindowWidth } from '../../hooks/useWindowWidth'

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const Header: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const windowWidth = useWindowWidth()

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  console.log(windowWidth)

  return (
    <header className={`pb-3 pt-3 xs:mb-0 s:mb-2 md:mb-10`}>
      <AnimatePresence mode='wait'>
        {isSearchVisible ? (
          <motion.div
            key='search'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={fadeInOut}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.1,
            }}
          >
            <Search onSearchClose={() => setIsSearchVisible(false)} />
          </motion.div>
        ) : (
          <motion.div
            key='headerContent'
            className='container mx-auto flex justify-between pb-3 pl-4 pr-4'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={fadeInOut}
            transition={{
              duration: 0.9,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            <Logo />
            {windowWidth >= 576 && <HeaderNavList />}
            <HeaderNavIcons
              onSearchVisible={() => setIsSearchVisible(true)}
              windowWidth={windowWidth}
              handleMobileNav={handleMobileNav}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Lines firstLineHeight='h-[1px]' />
      <AnimatePresence>
        {isMobileNavOpen && <MobileNavList handleMobileNav={handleMobileNav} />}
      </AnimatePresence>
    </header>
  )
}
