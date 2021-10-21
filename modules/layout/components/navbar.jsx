import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Logo from './logo'
import SearchBar from './search-bar'
import SignupButton from './signup-button'

export default function Navbar() {
  return (
    <NavbarContainer px={['16px', '140px']}>
      <Logo />
      <SearchBar />
      <SignupButton />
    </NavbarContainer>
  )
}

const NavbarContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`
