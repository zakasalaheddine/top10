import styled from "@emotion/styled";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Circle } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Item = ({ itemType, icon, title, children }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <ItemContainer my={["12px", "18px", "24px"]} px={["10px", "26px"]}>
      <HeaderContainer h={["48px", "75px", "97px"]}>
        <Flex align="center">
          <CircleContainer bgColor="#fff">
            {itemType === "post" && <Text>{icon}</Text>}
            {itemType === "categorie" && <Image src={icon} />}
          </CircleContainer>
          <Title as="h1" fontSize={["lg", "xl", "2xl"]}>
            {title}
          </Title>
        </Flex>
        <CircleContainer as="button" bgColor="primary" onClick={onToggle}>
          {!isOpen && <BiChevronUp size="32px" color="#fff" />}
          {isOpen && <BiChevronDown size="32px" color="#fff" />}
        </CircleContainer>
      </HeaderContainer>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </ItemContainer>
  );
};

export default Item;

//styled components
export const ItemContainer = styled(Box)`
  background-color: #e9e9e9;
  border: 1px solid rgba(196, 196, 196, 0.5);
  border-radius: 15px;
  width: 100%;
`;
export const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
export const CircleContainer = styled(Circle)`
  color: #fff;
  background-color: ${({ bgColor }) => bgColor || "#01036a"};
  width: 50px;
  height: 50px;
  & p {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
  & img {
    width: 72%;
    height: 72%;
  }
  @media (max-width: 48em) {
    width: 42px;
    height: 42px;
    & p {
      font-size: 18px;
    }
  }
  @media (max-width: 30em) {
    width: 30px;
    height: 30px;
    & p {
      font-size: 16px;
    }
  }
`;
export const Title = styled(Text)`
  font-weight: bold;
  margin-left: 15px;
`;
