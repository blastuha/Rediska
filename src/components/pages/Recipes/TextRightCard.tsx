import { Link } from 'react-router-dom'

type RecipeCardProp = {
  id?: string
  photoURL?: string
  title?: string
}

export const MostPopularCard: React.FC<RecipeCardProp> = ({ id, photoURL, title }) => {
  return (
    <Link to={`/reciept/${id ? id : ''}`} key={id}>
      <li className='group flex max-w-full cursor-pointer flex-row items-center gap-4 rounded-lg text-dark-blue'>
        <figure className=' h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-lg '>
          <img
            src={photoURL}
            alt='picture'
            className='h-full w-full transform object-cover transition-transform duration-1000 group-hover:scale-110'
          />
        </figure>

        <h2 className=' text-lg font-bold decoration-[0.1rem] transition-colors duration-1000 group-hover:underline'>
          {title}
        </h2>
      </li>
    </Link>
  )
}
