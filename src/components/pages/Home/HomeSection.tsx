import React from 'react'
import { SectionTitle } from '../../ui/SectionTitle.tsx'

type HomeSectionProps = {
  children: React.ReactNode
  title: string
}

export const HomeSection: React.FC<HomeSectionProps> = ({ children, title }) => {
  return (
    <section className='mb-6'>
      <SectionTitle title={title} />
      {children}
    </section>
  )
}
