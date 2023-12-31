import React from 'react'
import { SectionTitle } from '../../ui/SectionTitle.tsx'

type HomeSectionProps = {
  children: React.ReactNode
  title?: string
}

export const HomeSection: React.FC<HomeSectionProps> = ({ children, title }) => {
  return (
    <section className='xs:mb-6 md:mb-14'>
      {title ? <SectionTitle title={title} /> : null}
      {children}
    </section>
  )
}
