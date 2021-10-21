import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ showing = true }) {
  return showing ? (
    <SearchBarContainer w={['100%', '455px']}>
      <input placeholder="Search..." />
      <PrimarySearchButton
        aria-label="Search"
        icon={<Icon as={FiSearch} w="25px" h="25px" />}
        bgColor="primary"
      />
    </SearchBarContainer>
  ) : (
    <></>
  )
}

const SearchBarContainer = styled(Box)`
  border: 1px solid #ff5428;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 15px;
  input {
    border: none;
    outline: none;
    flex: 1;
  }
`

const PrimarySearchButton = styled(IconButton)`
  border-radius: 15px;
  color: #ffffff;
  padding: 8px 18px;
`
