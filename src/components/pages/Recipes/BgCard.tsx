import { Link } from 'react-router-dom'

type SpecialDientCardProp = {
  id?: string
  photoURL?: string
  title?: string
  firstCardStyles?: string
}

export const BgCard: React.FC<SpecialDientCardProp> = ({
  id,
  photoURL,
  title,
  firstCardStyles,
}) => {
  return (
    <li
      className={`${
        firstCardStyles ? firstCardStyles : ''
      }  flex w-full cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-lg drop-shadow-sm`}
    >
      <Link to={`/reciept/${id ? id : ''}`} key={id} className=' flex h-full w-full flex-col'>
        <figure className='min-h-[280px] min-w-[280px]  overflow-hidden  '>
          <img src={photoURL} alt='picture' className='h-full w-full transform  object-cover' />
        </figure>
        <h2 className='h-fit flex-grow bg-light-blue p-4 font-bold text-dark-blue'>{title}</h2>
      </Link>
    </li>
  )
}
