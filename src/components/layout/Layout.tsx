import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = () => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
