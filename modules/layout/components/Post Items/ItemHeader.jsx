import { AspectRatio, Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Image as ChakraImage } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ItemHeader = () => {
  return (
    <HeaderContainer
      m={["4px 0", "10px 0", "18px 0"]}
      h={["60px", "60px", "85px"]}
    >
      <LeftPart w={["58%", "60%", "50%"]}>
        <NumberContainer display={["none", "flex"]}>
          <P fontSize={["0", "3xl", "6xl"]}>1</P>
          <VerticalLine />
        </NumberContainer>
        <LogoTitleContainer>
          <AspectRatio w={["86px", "86px", "130px"]} ratio={16 / 6} mr={1}>
            <ChakraImage src="/images/ItemLogo.png" />
          </AspectRatio>
          <P as="h1" fontSize={["sm", "lg", "2xl", "3xl"]}>
            HelloFresh
          </P>
        </LogoTitleContainer>
      </LeftPart>
      <RightPart>
        <P fontSize={["sm", "lg", "2xl", "3xl"]} color="#01036A">
          Exceptionnal
        </P>
        <Badge p={["4px", "8px"]}>
          <P fontSize={["xs", "sm"]}>9.9</P>
        </Badge>
      </RightPart>
    </HeaderContainer>
  );
};

export default ItemHeader;

//styled components
const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LeftPart = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const RightPart = styled(Flex)`
  align-items: center;
  & > p {
    color: #01036a;
  }
`;
const NumberContainer = styled(Flex)`
  align-items: center;
  width: 5%;
  height: 100%;
  margin-right: 16px;
  & p {
    color: rgba(88, 88, 88, 0.4);
  }
`;
const P = styled(Text)`
  font-weight: bold;
`;
const VerticalLine = styled(Box)`
  height: 100%;
  margin-left: 30%;
  border-left: 1px solid rgba(0, 0, 0, 0.4);
`;
const LogoTitleContainer = styled(Flex)`
  align-items: center;
  justify-content: space-around;
  width: 95%;
`;
const Badge = styled(Center)`
  background-color: #01036a;
  color: #fff;
  border-radius: 8px;
  margin-left: 3%;
  & p {
    color: color= "#fff";
  }
`;
