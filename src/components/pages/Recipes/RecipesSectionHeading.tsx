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
      <h2 className='w-fit overflow-hidden whitespace-nowrap font-playfair  text-dark-blue xs:text-[20px] lg:text-[50px]'>
        {title}
        <Lines firstLineHeight='h-[2px]' />
      </h2>
      <span className='font-raleway text-2xl leading-loose text-dark-blue'>{subtitle}</span>
    </div>
  )
}
