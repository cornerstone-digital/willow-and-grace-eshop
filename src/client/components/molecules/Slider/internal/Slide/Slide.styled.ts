import styled from 'styled-components'

interface SliderHeadingProps {
  textColor: 'black' | 'white'
}

export const SliderHeading = styled.h2<SliderHeadingProps>`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.2;
  color: ${props => props.textColor};
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0;
  font-size: 1.6em;
`

export const SlideSubHeading = styled.p<SliderHeadingProps>`
  margin-top: 0.75rem;
  margin-bottom: 0;
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => props.textColor};
`

export const ImageWrapper = styled.div`
  line-height: 0;
  position: relative;
  width: 100%;
  height: 400px;
`

interface SlideContentProps {
  contentAlign: 'center' | 'left' | 'right'
}

export const SlideContent = styled.div<SlideContentProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 90%;
  margin: 0;
  transform: translate(-50%, -50%);
  text-align: ${props => props.contentAlign};
`
