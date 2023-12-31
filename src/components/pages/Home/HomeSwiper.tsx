import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay } from 'swiper/modules'

import { SwiperCard } from './SwiperCard.tsx'

import { WidgetNewsData } from '../../../models'

import 'swiper/css'
import 'swiper/css/scrollbar'

SwiperCore.use([Autoplay, Scrollbar])

type SwiperProps = {
  widgetNewsData: WidgetNewsData[]
}

export const HomeSwiper: React.FC<SwiperProps> = ({ widgetNewsData }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className='flex h-full '
      >
        {widgetNewsData.map((item: WidgetNewsData) => {
          return (
            <SwiperSlide key={item.id} className='!h-auto '>
              <SwiperCard {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
