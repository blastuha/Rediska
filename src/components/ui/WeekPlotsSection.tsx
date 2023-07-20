import React from 'react'
import { SectionTitle } from './SectionTitle'
import image from '../../assets/images/varenie.jpg'

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
