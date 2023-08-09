import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselNextButton } from './CarouselNextButton'
import { CarouselPrevButton } from './CarouselPrevButton'

import { categoriesData } from '../../../constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type CarouselProps = {
  blockStyles?: string
}

export const Carousel: React.FC<CarouselProps> = ({ blockStyles }) => {
  return (
    <div className={`${blockStyles ? blockStyles : ''}`}>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={10}
        className='static box-border'
      >
        <CarouselPrevButton />
        {categoriesData.map((category, i) => (
          <SwiperSlide key={i} className='cursor-pointer'>
            <figure className='flex  flex-col items-center   '>
              <div className='max-h-[200px] max-w-[200px] overflow-hidden rounded-full'>
                <img className='h-full w-full' src={category.photoURL} alt='categoryPicture' />
              </div>
              <h5 className='p-1.5'>{category.name}</h5>
            </figure>
          </SwiperSlide>
        ))}
        <CarouselNextButton />
      </Swiper>
    </div>
  )
}
