import React, { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
