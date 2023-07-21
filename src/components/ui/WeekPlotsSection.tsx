import React from 'react'
import { SectionTitle } from './SectionTitle'

type WeekPlotsSectionProps = {
  children: React.ReactNode
}

export const WeekPlotsSection: React.FC<WeekPlotsSectionProps> = ({
  children,
}) => {
  return (
    <section>
      <SectionTitle title='Сюжеты недели' />
      {children}
    </section>
  )
}
