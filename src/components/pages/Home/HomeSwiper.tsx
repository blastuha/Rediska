import React from 'react'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay } from 'swiper/modules'


import { SwiperCard } from './SwiperCard.tsx'

import { NewsData } from '../../../models'

import 'swiper/css'
import 'swiper/css/scrollbar'

SwiperCore.use([Autoplay, Scrollbar]);

type SwiperProps = {
  newsData: NewsData[]
}

export const Swiper: React.FC<SwiperProps> = ({ newsData }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        autoplay={{
          delay: 1500, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {newsData.map((item: NewsData) => {
          return (
            <SwiperSlide key={item.id}>
              <SwiperCard {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
