import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { NewsData } from '../../models'

import 'swiper/css'
import 'swiper/css/scrollbar'

export const MainSwiper: React.FC<{
  newsData: NewsData[]
  childrenEl: (data: NewsData) => React.ReactElement
}> = ({ newsData, childrenEl }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
      >
        {newsData.map((item) => {
          return <SwiperSlide key={item.id}>{childrenEl(item)}</SwiperSlide>
        })}
      </Swiper>
    </>
  )
}
