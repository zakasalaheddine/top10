import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import Item from "../Item/Item";

const CategorieListMobile = ({ categories }) => {
  return (
    <Box display={["block", "block", "none"]}>
      {categories.map((categorie, i) => (
        <Item
          key={i}
          itemType="categorie"
          icon={categorie.icon.url}
          title={categorie.name}
        >
          <Text>{categorie.description}</Text>
        </Item>
      ))}
    </Box>
  );
};

export default CategorieListMobile;
