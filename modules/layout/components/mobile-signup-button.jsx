import { Button } from '@chakra-ui/button'
import styled from '@emotion/styled'

export default function MobileSignupButton() {
  return <ButtonStyled bgColor="topBlue">Sign Up</ButtonStyled>
}

const ButtonStyled = styled(Button)`
  color: #fff;
  margin-top: 10px;
  width: 222px;
  margin-left: auto;
  margin-right: auto;
`
