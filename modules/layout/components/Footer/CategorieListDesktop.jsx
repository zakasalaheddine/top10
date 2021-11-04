import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import { Center, Flex, Text } from "@chakra-ui/layout";
import Categorie from "./Categorie";
import SliderSettings from "./SliderSettings";
const CategorieList = ({ categories }) => {
  console.log(categories);
  return (
    <Flex spacing={5} display={["none", "none", "flex"]}>
      <CategorieContainer w="64px" mr="10px" bgColor="primary">
        <Text fontSize="xl" fontWeight="bold" color="#fff">
          All
        </Text>
      </CategorieContainer>
      <Slider {...SliderSettings}>
        {categories.map((categorie, i) => (
          <Categorie key={i} categorie={categorie} />
        ))}
      </Slider>
    </Flex>
  );
};

export default CategorieList;

export const CategorieContainer = styled(Center)`
  flex-shrink: 0;
  border-radius: 15px;
  height: 62px;
  width: ${({ w }) => w || "150px"};
  background-color: ${({ bgColor }) => bgColor || "#fff"};
`;
