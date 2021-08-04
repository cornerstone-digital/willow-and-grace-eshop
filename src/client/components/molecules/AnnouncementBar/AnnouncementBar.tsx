import Box from '@components/atoms/Box'
import { BoxProps } from '@components/atoms/Box/Box'
import styled from 'styled-components'

const StyledAnnoucementBar = styled(Box)({
  borderBottom: '1px solid #CCCCCC',
})

const AnnouncementBar = (props: { text: string } & BoxProps) => {
  return (
    <StyledAnnoucementBar
      p={3}
      mb={0}
      bg="white"
      color="black"
      textAlign="center"
      fontWeight={700}
      fontSize={'0.875em'}
      fontFamily="sans-serif"
      id="announcement-bar"
      data-testid="announcement-bar"
    >
      {props.text}
    </StyledAnnoucementBar>
  )
}

export default AnnouncementBar
