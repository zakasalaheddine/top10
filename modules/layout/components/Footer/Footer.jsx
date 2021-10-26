import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/layout";
import CategorieListDesktop from "./CategorieListDesktop";
const Footer = () => {
  return (
    <FooterContainer
      as="footer"
      p={["30px 16px", "30px 30px", "30px 45px", "30px 100px", "30px 140px"]}
    >
      <Title as="h1" fontSize={["lg", "xl", "3xl"]}>
        Explore Our Categories
      </Title>
      <CategorieListDesktop />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Box)`
  background-color: rgba(242, 242, 242, 0.5);
`;
const Title = styled(Text)`
  margin-bottom: 24px;
  font-weight: bold;
`;
