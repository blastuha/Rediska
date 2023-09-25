import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselNextButton } from './CarouselNextButton'
import { CarouselPrevButton } from './CarouselPrevButton'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import { categoriesData } from '../../../constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type CarouselProps = {
  blockStyles?: string
}

export const Carousel: React.FC<CarouselProps> = ({ blockStyles }) => {
  const width = useWindowWidth()
  const swiperRef = useRef(null)

  const widthFunc = () => {
    if (width >= 992) {
      return 6
    }
    if (width >= 768) {
      return 5
    }
    if (width >= 576) {
      return 4
    }
    if (width < 576) {
      return 3
    }
  }

  return (
    <div className={`${blockStyles ? blockStyles : ''}`}>
      <CarouselPrevButton swiperRef={swiperRef} />
      <Swiper ref={swiperRef} slidesPerView={widthFunc()} centeredSlides={false} spaceBetween={0}>
        {categoriesData.map((category, i) => (
          <SwiperSlide className='cursor-pointer'>
            <Link to={`/category/${category.name}`} key={i}>
              <figure className='flex  flex-col items-center'>
                <div className=' overflow-hidden  rounded-full xs:h-[84px]  xs:w-[84px] s:h-[132px]  s:w-[132px]  md:h-[142px]  md:w-[142px] lg:h-[154px]  lg:w-[154px] xl:h-[186px] xl:w-[186px] '>
                  <img
                    className='h-full w-full object-cover'
                    src={category.photoURL}
                    alt='categoryPicture'
                  />
                </div>
                <h5 className='p-1.5'>{category.name}</h5>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselNextButton swiperRef={swiperRef} />
    </div>
  )
}
