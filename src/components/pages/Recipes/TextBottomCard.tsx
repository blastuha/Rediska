import { Link } from 'react-router-dom'

type SpecialDientCardProp = {
  id?: string
  photoURL?: string
  title?: string
}

export const SpecialDientCard: React.FC<SpecialDientCardProp> = ({ id, photoURL, title }) => {
  return (
    <li className='group flex max-w-full cursor-pointer flex-col items-center gap-4 rounded-lg'>
      <Link to={`/reciept/${id ? id : ''}`} key={id}>
        <figure className=' flex-shrink-1 h-[280px] w-[280px] overflow-hidden rounded-lg '>
          <img
            src={photoURL}
            alt='picture'
            className='h-full w-full transform object-cover transition-transform duration-1000 group-hover:scale-110'
          />
        </figure>

        <h2 className=' text-lg font-bold decoration-[0.1rem] transition-colors duration-1000 group-hover:underline'>
          {title}
        </h2>
      </Link>
    </li>
  )
}
