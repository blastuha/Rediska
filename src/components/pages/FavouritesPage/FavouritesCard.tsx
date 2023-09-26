import { Link } from 'react-router-dom'
import { HeartFilled } from '../../ui/Icons/HeartFilled'
import { RecipeData } from '../../../models'

type FavouritesCardProp = {
  recipe?: RecipeData
  id?: string
  photoURL?: string
  title?: string
  removeFromFavourites?: (recipe: RecipeData) => Promise<void>
}

export const FavouritesCard: React.FC<FavouritesCardProp> = ({
  recipe,
  id,
  photoURL,
  title,
  removeFromFavourites,
}) => {
  return (
    <li className=' flex max-w-full cursor-pointer flex-col  gap-4 rounded-lg'>
      <Link to={`/reciept/${id ? id : ''}`} key={id}>
        <figure className=' flex-shrink-1 relative overflow-hidden rounded-lg md:h-[220px] md:w-[220px] xl:h-[280px] xl:w-[280px]'>
          <img src={photoURL} alt='picture' className='h-full w-full transform object-cover ' />
          <button
            className='absolute right-[2%] top-[2%]  rounded-full bg-dark-blue p-2 transition-all duration-500 hover:bg-lines-blue'
            onClick={(event) => {
              event.preventDefault()
              if (removeFromFavourites && recipe) {
                removeFromFavourites(recipe).catch((err) =>
                  console.error('Ошибка при удалении из избранного:', err),
                )
              }
            }}
          >
            <HeartFilled styles='lg:w-7 lg:h-7 xs:w-4 xs:h-4 sm:w-5 sm:h-5 h-4 w-4 text-[white]' />
          </button>
        </figure>

        <h2 className='font-bold text-dark-blue decoration-[0.1rem] s:text-sm sm:text-[1rem] lg:text-lg '>
          {title}
        </h2>
      </Link>
    </li>
  )
}
