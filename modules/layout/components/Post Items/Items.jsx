import { Box, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React from "react";
import ItemDescription from "./ItemDescription";
import ItemFooter from "./ItemFooter";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";

const Items = () => {
  return (
    <Box mt="50px">
      <Title as="h1" fontSize={["xl", "2xl", "4xl"]}>
        A Closer Look At The Top 10 Meal Delivery Services
      </Title>
      <ItemHeader />
      <ItemImage />
      <ItemDescription />
      <ItemFooter />
    </Box>
  );
};

export default Items;

const Title = styled(Text)`
  font-weight: bold;
`;
