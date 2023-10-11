import { Link } from 'react-router-dom'

type RecipeCardProp = {
  id?: string
  photoURL?: string
  title?: string
}

export const TextRightCard: React.FC<RecipeCardProp> = ({ id, photoURL, title }) => {
  return (
    <Link to={`/reciept/${id ? id : ''}`} key={id}>
      <li className='group flex max-w-full cursor-pointer flex-row items-center rounded-lg text-dark-blue  xs:gap-2 md:gap-4'>
        <figure className='flex-shrink-0 overflow-hidden  rounded-lg xs:h-[180px] xs:w-[180px] s:h-[200px] s:w-[200px] '>
          <img
            src={photoURL}
            alt='picture'
            className='h-full w-full transform object-cover transition-transform duration-1000 group-hover:scale-110'
            loading='lazy'
          />
        </figure>

        <h2 className=' font-bold decoration-[0.1rem] transition-colors duration-1000 group-hover:underline xs:text-[0.9rem] s:text-[1rem] md:text-lg'>
          {title}
        </h2>
      </li>
    </Link>
  )
}
