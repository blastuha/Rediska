import { Lines } from '../../ui/Lines'

type RecipesSectionHeadingProps = {
  title?: string
  subtitle?: string
  blockStyles: string
}

export const RecipesSectionHeading: React.FC<RecipesSectionHeadingProps> = ({
  title,
  subtitle,
  blockStyles,
}) => {
  return (
    <div className={blockStyles}>
      <h2 className='w-fit overflow-hidden font-playfair text-dark-blue  xs:text-[1.8rem] md:whitespace-nowrap md:text-[2rem] lg:text-[3.1rem]'>
        {title}
        <Lines firstLineHeight='h-[2px]' />
      </h2>
      <span className='font-raleway leading-loose text-dark-blue  xs:text-[1.1rem] md:text-2xl'>
        {subtitle}
      </span>
    </div>
  )
}
