import { Link } from 'react-router-dom'

type SpecialDietCardProp = {
  id?: string
  photoURL?: string
  title?: string
}

export const SpecialDietCard: React.FC<SpecialDietCardProp> = ({ id, photoURL, title }) => {
  return (
    <li className='group flex max-w-full cursor-pointer flex-col   gap-4 rounded-lg '>
      <Link to={`/reciept/${id ? id : ''}`} key={id}>
        {/* <figure className=' flex-shrink-1 overflow-hidden rounded-lg xs:h-[136px] xs:w-[136px] s:h-[210px] s:w-[210px]  md:mb-2 md:h-[240px] md:w-[240px] lg:mb-0 lg:h-[280px] lg:w-[280px] '> */}
        <figure className=' flex-shrink-1 mb-2 overflow-hidden  rounded-lg md:h-[240px] md:w-[240px] lg:h-[280px] lg:w-[280px] '>
          <img
            src={photoURL}
            alt='picture'
            className='h-full w-full transform object-cover transition-transform duration-1000 group-hover:scale-110'
          />
        </figure>

        <h2 className='font-bold text-dark-blue decoration-[0.1rem] transition-colors duration-1000 group-hover:underline xs:text-[1rem] md:text-lg'>
          {title}
        </h2>
      </Link>
    </li>
  )
}
