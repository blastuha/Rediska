import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Footer2 } from './Footer2'

export const Layout: React.FC = () => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <Outlet />
        <Footer2 />
      </div>
    </>
  )
}
