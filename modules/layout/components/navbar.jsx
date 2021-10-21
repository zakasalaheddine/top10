import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import { useWindowSize } from '../../hooks/useWindowSize'
import Logo from './logo'
import MobileDropDown from './mobile-dropdown'
import SearchBar from './search-bar'
import SignupButton from './signup-button'

export default function Navbar() {
  const { width } = useWindowSize()
  return (
    <NavbarContainer px={['16px', '20px', '20px','140px']}>
      <Logo />
      <SearchBar showing={width > 414} />
      <SignupButton />
      <MobileDropDown />
    </NavbarContainer>
  )
}

const NavbarContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`
