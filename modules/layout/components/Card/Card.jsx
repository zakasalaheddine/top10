import styled from "@emotion/styled";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Circle } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Item = ({ itemType, icon, title, children }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <ItemContainer my={["12px", "18px", "24px"]} px={["10px", "24px"]}>
      <HeaderContainer h={["48px", "75px", "97px"]}>
        <Flex align="center">
          <CircleContainer
            bgColor={itemType === "categorie" ? "#fff" : "#01036a"}
          >
            {itemType === "post" && <Text>{icon}</Text>}
            {itemType === "categorie" && (
              <Image src={`${`https://api-top10.zakadev.com`}${icon}`} />
            )}
          </CircleContainer>
          <Title as="h1" fontSize={["sm", "lg", "xl"]}>
            {title}
          </Title>
        </Flex>
        <CircleContainer
          as="button"
          bgColor={itemType === "categorie" ? "primary" : "#01036a"}
          onClick={onToggle}
        >
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
  background-color: #f2f2f2;
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
  width: 46px;
  height: 46px;
  & p {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  & img {
    width: 72%;
    height: 72%;
  }
  @media (max-width: 48em) {
    width: 38px;
    height: 38px;
    & p {
      font-size: 18px;
    }
  }
  @media (max-width: 30em) {
    width: 26px;
    height: 26px;
    & p {
      font-size: 16px;
    }
  }
`;
export const Title = styled(Text)`
  font-weight: bold;
  margin-left: 15px;
`;
