import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { NewsData } from '../../models'
import { MainSwiperSlide } from './MainSwiperSlide'

import 'swiper/css'
import 'swiper/css/scrollbar'

type MainSwiperProps = {
  newsData: NewsData[]
}

export const MainSwiper: React.FC<MainSwiperProps> = ({ newsData }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
      >
        {newsData.map((item: NewsData) => {
          return (
            <SwiperSlide key={item.id}>
              <MainSwiperSlide {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
