import React from 'react'
import Slider from 'react-slick'

import { categoriesData } from '../../../constants'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel: React.FC = () => {
  const settings = {
    dots: false, // Отображать точки навигации
    infinite: false, // Бесконечная прокрутка
    speed: 500, // Скорость прокрутки
    slidesToShow: 5, // Количество слайдов, отображаемых за раз
    slidesToScroll: 1, // Количество слайдов, прокручиваемых за раз
    arrows: true, // Отображать стрелки навигации
  }

  return (
    <Slider {...settings}>
      {categoriesData.map((category, i) => (
        <div key={i}>
          <img className='h-48 w-48 rounded-full' src={category.photoURL} alt='pic' />
        </div>
      ))}
    </Slider>
  )
}
