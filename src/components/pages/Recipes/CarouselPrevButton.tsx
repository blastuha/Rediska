export const CarouselPrevButton: React.FC<{
  swiperRef: React.RefObject<any>
}> = ({ swiperRef }) => {
  return (
    <button
      className='absolute left-[-4%] top-[50%] z-[99999] translate-y-[-50%]'
      onClick={() => swiperRef.current?.swiper?.slideNext()}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-8 w-8'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
      </svg>
    </button>
  )
}
