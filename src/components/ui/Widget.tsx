import React from 'react'
import { Link } from 'react-router-dom'

type WidgetProps = {
  title: string
  paragraph: string
  photoURL: string
  link: string
}

export const Widget: React.FC<WidgetProps> = ({ title, paragraph, photoURL, link }) => {
  return (
    <Link to={link} className='flex flex-col overflow-hidden rounded-lg'>
      <div className='bg-base h-3/4 w-full '>
        <img src={photoURL} alt='widgetPic' />
      </div>
      <div className='h-1/4 w-full bg-light-blue xs:p-6 md:p-10'>
        <h2 className='mb-3 text-center font-extrabold xs:text-2xl md:text-4xl'>{title}</h2>
        <p className='text-center xs:text-[1rem] md:text-xl '>{paragraph}</p>
      </div>
    </Link>
  )
}
