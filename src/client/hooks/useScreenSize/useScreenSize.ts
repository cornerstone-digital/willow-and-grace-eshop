import { useMediaQuery } from 'react-responsive'
import breakpoints from '@constants/breakpoints'

const useScreenSize = () => {
  const isMobileDevice = useMediaQuery({
    minWidth: breakpoints.phone.min,
    maxWidth: breakpoints.phone.max,
  })

  const isTabletDevice = useMediaQuery({
    minWidth: breakpoints.tablet.min,
    maxWidth: breakpoints.tablet.max,
  })

  const isLaptop = useMediaQuery({
    minWidth: breakpoints.laptop.min,
    maxWidth: breakpoints.laptop.max,
  })

  const isDesktop = useMediaQuery({
    minWidth: breakpoints.desktop.min,
    maxWidth: breakpoints.desktop.max,
  })

  const isBigScreen = useMediaQuery({
    minWidth: breakpoints.bigScreen.min,
  })

  return {
    isMobileDevice,
    isTabletDevice,
    isLaptop,
    isDesktop,
    isBigScreen,
  }
}

export default useScreenSize
