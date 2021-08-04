import { keyframes } from 'styled-components'

export const slideFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideFadeX = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0, 25%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
