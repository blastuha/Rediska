import React from 'react'

type RecipesSectionProps = {
  children?: React.ReactElement
  sectionHeading: React.ReactElement
  sectionStyles: string
}

export const RecipesSection: React.FC<RecipesSectionProps> = ({
  sectionHeading,
  sectionStyles,
  children,
}) => {
  return (
    <section className={sectionStyles}>
      {sectionHeading}
      {children}
    </section>
  )
}
