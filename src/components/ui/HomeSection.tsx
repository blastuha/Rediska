import React from 'react'
import { SectionTitle } from './SectionTitle'

type HomeSectionProps = {
  children: React.ReactNode
}

export const HomeSection: React.FC<HomeSectionProps> = ({ children }) => {
  return (
    <section>
      <SectionTitle title='Сюжеты недели' />
      {children}
    </section>
  )
}
