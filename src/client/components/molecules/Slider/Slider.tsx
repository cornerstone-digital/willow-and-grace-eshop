import { memo } from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions, A11y } from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import Slide, { SlideProps } from './internal/Slide'
import { v4 } from 'uuid'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, A11y])

const StyledSlider = styled(Swiper)({
  minWidth: '100%',
})

interface SliderProps extends SwiperOptions {
  slides: SlideProps[]
}

const renderSlides = (slides: SliderProps['slides']) => {
  return slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <Slide key={v4()} {...slide} />
    </SwiperSlide>
  ))
}

const Slider = (props: SliderProps) => {
  return (
    <StyledSlider speed={1000} setWrapperSize resizeObserver preloadImages {...props}>
      {renderSlides(props.slides)}
    </StyledSlider>
  )
}

export default memo(Slider)
