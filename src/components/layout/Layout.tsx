import React, { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
