import React from "react";
import styled from "@emotion/styled";
import { Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const Categorie = ({ categorie }) => {
  return (
    <CategorieContainer to={categorie.slug}>
      <P>{categorie.name}</P>
      <Icon src={`https://api-top10.zakadev.com${categorie.icon.url}`} />
    </CategorieContainer>
  );
};

export default Categorie;

//styled components
const CategorieContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  width: 106px;
  height: 106px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 48em) {
    width: 80px;
    height: 80px;
  }
`;

const P = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  @media (max-width: 48em) {
    font-size: 14px;
  }
`;
const Icon = styled(Image)`
  width: 40px;
  @media (max-width: 48em) {
    width: 30px;
  }
`;
