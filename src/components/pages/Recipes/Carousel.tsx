import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules

import { categoriesData } from '../../../constants'

import { CarouselNextButton } from './CarouselNextButton'
import { CarouselPrevButton } from './CarouselPrevButton'

export const Carousel: React.FC = () => {
  //! сделать умный ресайз https://qna.habr.com/q/267069
  return (
    <div className='relative'>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={0}
        className='static box-border'
      >
        <CarouselPrevButton />
        {categoriesData.map((category, i) => (
          <SwiperSlide key={i} className='cursor-pointer'>
            <figure className='flex flex-col items-center  '>
              <img
                className='h-[200px] w-[200px] rounded-full p-2'
                src={category.photoURL}
                alt='pic'
              />
              <h5>{category.name}</h5>
            </figure>
          </SwiperSlide>
        ))}
        <CarouselNextButton />
      </Swiper>
    </div>
  )
}
