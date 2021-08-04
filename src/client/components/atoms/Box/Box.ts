import styled from 'styled-components'
import { space, SpaceProps, fontSize, FontSizeProps, color, typography, ColorProps, TypographyProps } from 'styled-system'

export type BoxProps = SpaceProps & FontSizeProps & ColorProps & TypographyProps

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  fontSize,
  typography,
)

export default Box
