import { Lines } from '../../ui/Lines'

type RecipesSectionTitleProps = {
  title: string
  subtitle: string
  blockStyles: string
}

export const RecipesSectionTitle: React.FC<RecipesSectionTitleProps> = ({
  title,
  subtitle,
  blockStyles,
}) => {
  return (
    <div className={`${blockStyles}`}>
      <h2 className='w-fit overflow-hidden whitespace-nowrap font-playfair text-[50px]'>
        {title}
        <Lines firstLineHeight='h-[2px]' />
      </h2>
      <span className='font-raleway text-2xl leading-loose'>{subtitle}</span>
    </div>
  )
}
