import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'
import './swiper.css'

export const MainSwiper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className='mySwiper'
      >
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
    </>
  )
}
