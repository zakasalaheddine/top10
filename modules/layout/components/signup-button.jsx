import { Link } from '@chakra-ui/react'

export default function SignupButton() {
  return (
    <Link
      color="primary"
      fontSize="20px"
      fontWeight="extrabold"
      display={['none', 'block']}
      _hover={{ textDecoration: 'none' }}
    >
      Sign up
    </Link>
  )
}
