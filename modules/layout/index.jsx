import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Navbar from './components/navbar'

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer as="main">{children}</ContentContainer>
    </LayoutContainer>
  )
}

const LayoutContainer = styled(Box)``
const ContentContainer = styled(Box)``
