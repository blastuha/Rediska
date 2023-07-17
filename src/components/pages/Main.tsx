import React from 'react'
import { MainWidget } from '../ui/MainWidget'

export const Main: React.FC = () => {
  return (
    <main className='flex-grow'>
      <div className='container mx-auto pr-4 pl-4'>{<MainWidget />}</div>
    </main>
  )
}
