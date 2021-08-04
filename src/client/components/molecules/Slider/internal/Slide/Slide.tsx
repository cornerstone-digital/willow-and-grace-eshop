import { Media } from '@components/utility/Media'
import useWindowSize from '@hooks/useWindowSize'
import { v4 } from 'uuid'

import * as Styled from './Slide.styled'

export interface SlideProps {
  images: {
    mobile: string
    tablet: string
    desktop: string
  }
  alt: string
  height: number
  heading: string
  subHeading: string
  textColor: 'black' | 'white'
  contentAlign: 'center' | 'left' | 'right'
}

const Slide = ({ images, alt = 'Slide', height = 400, heading, subHeading, textColor = 'black', contentAlign }: SlideProps) => {
  const windowSize = useWindowSize()
  return (
    <>
      <Styled.ImageWrapper>
        <Media at="xs">{/* <Image key={v4()} src={images.mobile} alt={alt} height={height} width={windowSize.width} /> */}</Media>
        <Media at="md">{/* <Image key={v4()} src={images.tablet} alt={alt} height={height} width={windowSize.width} /> */}</Media>
        <Media at="lg">{/* <Image key={v4()} src={images.desktop} alt={alt} height={height} width={windowSize.width} /> */}</Media>
      </Styled.ImageWrapper>
      <Styled.SlideContent contentAlign={contentAlign}>
        <Styled.SliderHeading textColor={textColor}>{heading}</Styled.SliderHeading>
        <Styled.SlideSubHeading textColor={textColor}>{subHeading}</Styled.SlideSubHeading>
      </Styled.SlideContent>
    </>
  )
}

export default Slide
