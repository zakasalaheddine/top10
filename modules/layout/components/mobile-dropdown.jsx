import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/modal'
import styled from '@emotion/styled'
import React from 'react'
import Logo from './logo'
import MobileSignupButton from './mobile-signup-button'
import SearchBar from './search-bar'
import { FaBars } from 'react-icons/fa'
import Icon from '@chakra-ui/icon'

export default function MobileDropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MobileButton
        bgColor="topBlue"
        onClick={onOpen}
        display={['inline-flex', 'none']}
        icon={<Icon as={FaBars} w="25px" h="25px" />}
      >
        Open
      </MobileButton>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            justifyContent="center"
          >
            <Logo />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <SearchBar />
            <MobileSignupButton />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const MobileButton = styled(IconButton)`
  color: #fff;
  margin-top: 10px;
`
