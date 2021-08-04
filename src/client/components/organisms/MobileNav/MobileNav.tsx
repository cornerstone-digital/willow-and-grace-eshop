import Box from '@components/atoms/Box'
import { BoxProps } from '@components/atoms/Box/Box'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { BiSearch, BiUser } from 'react-icons/bi'
import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'

const MenuBar = styled(Box)({
  display: 'inherit',
  width: '100vw',
  borderBottom: '1px solid #CCCCCC',
})

const SearchIcon = styled(BiSearch)({
  paddingLeft: '15px',
})

const CartIcon = styled(FiShoppingCart)({
  marginLeft: 'auto',
})

const MobileNavigation = styled(Box)({
  display: 'flex',
  width: '100vw',
})

const getElementHeightById = (id: string) => {
  const element: HTMLElement | null = document.getElementById(id)

  return (element && element.scrollHeight) || 0
}

const MobileMenu = styled(Box)<{ open: boolean; topOffset?: number } & BoxProps>`
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  position: absolute;
  z-index: 9999;
  top: ${props => props.topOffset}px;
  left: 0;
  min-width: 100vw;
  min-height: calc(100% - ${props => props.topOffset}px);
  background-color: red;
  transition: transform 0.3s ease-in-out;

  > a {
    padding: 20px;
    display: flex;
    align-items: center;
    height: 30px;
    text-decoration: none;
    color: black;

    > span {
      margin-left: 10px;
    }
  }
`

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const [menuOffset, setMenuOffset] = useState(0)
  const toggleMenu = () => {
    setOpen(!open)
  }

  useLayoutEffect(() => {
    const announcementBarHeight = getElementHeightById('announcement-bar')
    const menuBarHeight = getElementHeightById('menu-bar')

    setMenuOffset(announcementBarHeight + menuBarHeight)
  })

  return (
    <MobileNavigation as="header">
      <MenuBar padding={3} id="menu-bar">
        {open ? <IoClose size="1.5em" onClick={toggleMenu} /> : <FiMenu size="1.5em" onClick={toggleMenu} />}
        <SearchIcon size="1.5em" />
        <CartIcon size="1.5em" />
      </MenuBar>
      <MobileMenu as="nav" id="mobile-nav" padding={0} margin={0} open={open} topOffset={menuOffset}>
        <a href="/">
          <BiUser size="2em" />
          <span>Login</span>
        </a>
      </MobileMenu>
    </MobileNavigation>
  )
}

export default MobileNav
