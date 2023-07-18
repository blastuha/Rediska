import React from 'react'
import { DocumentData } from 'firebase/firestore/lite'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'

export const MainSwiper: React.FC<{
  children: React.ReactElement
  newsData: DocumentData[]
}> = ({ children, newsData }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
      >
        {newsData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              {React.cloneElement(children, { ...item })}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
