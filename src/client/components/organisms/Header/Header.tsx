import Box from '@components/atoms/Box'
import AnnouncementBar from '@components/molecules/AnnouncementBar'
import DesktopNav from '@components/organisms/DesktopNav'
import MobileNav from '@components/organisms/MobileNav'
import { Media } from '@components/utility/Media'

const Header = () => {
  return (
    <Box as="header">
      <AnnouncementBar text="Now offering free shipping on all orders over £50!" />
      <Media lessThan="md">
        <MobileNav />
      </Media>
      <Media greaterThanOrEqual="md">
        <DesktopNav />
      </Media>
    </Box>
  )
}

export default Header
