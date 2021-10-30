import React from "react";
import styled from "@emotion/styled";
import { Center, HStack, Text } from "@chakra-ui/layout";
import Categorie from "./Categorie";
const CategorieList = ({ categories }) => {
  console.log(categories);
  return (
    <CategoriesContainer spacing={5} display={["none", "none", "flex"]}>
      <CategorieContainer w="64px" bgColor="primary">
        <Text fontSize="xl" fontWeight="bold" color="#fff">
          All
        </Text>
      </CategorieContainer>
      {categories.map((categorie, i) => (
        <Categorie key={i} categorie={categorie} />
      ))}
    </CategoriesContainer>
  );
};

export default CategorieList;

const CategoriesContainer = styled(HStack)`
  overflow: auto;
`;
export const CategorieContainer = styled(Center)`
  flex-shrink: 0;
  border-radius: 15px;
  height: 62px;
  width: ${({ w }) => w || "150px"};
  background-color: ${({ bgColor }) => bgColor || "#fff"};
`;
