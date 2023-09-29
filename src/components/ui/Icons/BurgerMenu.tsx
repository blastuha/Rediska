import { motion } from 'framer-motion'

type BurgerMenuProps = {
  handleMobileNav: () => void
  isMobileNavOpen: boolean
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ handleMobileNav, isMobileNavOpen }) => {
  return (
    <div onClick={handleMobileNav} className='mr-2'>
      <motion.div
        key={isMobileNavOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: isMobileNavOpen ? 180 : 0 }}
        exit={{ opacity: 0, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isMobileNavOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        )}
      </motion.div>
    </div>
  )
}
