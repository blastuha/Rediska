import React from 'react'

type SectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h4 className='text-3xl font-playfair font-semibold pb-8 pt-8'>{title}</h4>
  )
}
