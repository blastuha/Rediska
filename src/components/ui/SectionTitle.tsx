import React from 'react'

type SectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h4 className='pb-8 pt-8 font-playfair text-3xl font-semibold'>{title}</h4>
}
