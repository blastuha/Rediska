import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = () => {
  return (
    <>
      <AnimatePresence>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </AnimatePresence>
    </>
  )
}
