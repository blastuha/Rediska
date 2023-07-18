import React from 'react'
import { NewsSection } from '../ui/NewsSection'

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className='flex-grow'>
      <div className='container mx-auto pr-4 pl-4'>
        <div className='mb-14'>{children}</div>
        <NewsSection />
      </div>
    </main>
  )
}
