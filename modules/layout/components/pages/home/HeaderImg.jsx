import React from "react";
import styled from "@emotion/styled";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const HeaderImg = () => {
  return (
    <HeaderImgContainer
      p={["30px 16px", "40px 30px", "50px 45px", "60px 100px", "80px 140px"]}
    >
      <HeaderTitle as="h1" fontSize={["18px", "28px", "48px"]}>
        The{" "}
        <Text as="span" color="primary">
          10 Best,{" "}
        </Text>
        Every Time
      </HeaderTitle>
      <P mb="24px">
        Compare The Top 10 Options Across <br />A Variety Of Products And
        Services
      </P>
      <Flex flexDir="column" align={["center", "flex-start"]}>
        <Btn>Find What You Need</Btn>
        <P>
          Already a member? <LinkStyled>Login</LinkStyled>
        </P>
      </Flex>
    </HeaderImgContainer>
  );
};

export default HeaderImg;

//styled components
const HeaderImgContainer = styled(Box)`
  width: 100%;
  background-image: url("/images/bg2.jpg");
  background-size: cover;
  @media (max-width: 30em) {
    background-image: url("/images/bg1.jpg");
  }
`;

const HeaderTitle = styled(Text)`
  font-weight: bold;
  margin-bottom: 16px;
`;

const P = styled(Text)`
  font-size: 22px;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: ${({ mb }) => mb || "0px"};
  @media (max-width: 48em) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 30em) {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const Btn = styled(Button)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 24px 0;
  width: 250px;
  background-color: #01036a;
  border-radius: 8px;
  &:hover {
    background-color: #ff5428;
  }
  @media (max-width: 30em) {
    font-size: 14px;
    padding: 20px 0;
    width: 190px;
  }
`;

const LinkStyled = styled(Link)`
  font-weight: bold;
  color: #01036a;
  &:hover {
    text-decoration: none;
    color: #ff5428;
  }
`;
