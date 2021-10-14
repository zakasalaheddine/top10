import { Image } from "@chakra-ui/image";
import { Center, Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const [dipslayMenu, setDisplayMenu] = useState(false);
  const handleDisplay = () => {
    setDisplayMenu((prevState) => !prevState);
  };
  return (
    <Flex as="nav" w="100%" h="100px" align="center" pr="2%">
      <Image src="/assets/images/logo.png" ml="9%" mr="2%" />
      <Flex
        align="center"
        justify="space-around"
        w="100%"
        display={["none", "none", "none", "flex"]}
      >
        <NavLink href="/about">about us</NavLink>
        <NavLink href="/cookie">cookie police</NavLink>
        <NavLink href="/privecy">privecy police</NavLink>
        <NavLink href="/sitemap">sitemap</NavLink>
        <SearchBar />
        <NavLink href="/signup" fontSize="22px" color="#FF5428">
          Sign Up
        </NavLink>
      </Flex>

      {/* for mobile device */}
      <Center
        onClick={handleDisplay}
        as="button"
        display={["flex", "flex", "flex", "none"]}
        m="0 15px 0 auto"
        w="48px"
        h="48px"
        bgColor="#01036A"
        borderRadius="8px"
      >
        {!dipslayMenu && <GiHamburgerMenu color="#fff" size="18px" />}
        {dipslayMenu && <RiCloseFill color="#fff" size="26px" />}
      </Center>
    </Flex>
  );
};

export default Navbar;
