import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Categories } from "./CategorieListDesktop";
import Item from "../Item/Item";

const CategorieListMobile = () => {
  return (
    <Box display={["block", "block", "none"]}>
      {Categories.map((categorie, i) => (
        <Item
          key={i}
          itemType="categorie"
          icon={categorie.icon}
          title={categorie.name}
        >
          <Text>{categorie.description}</Text>
        </Item>
      ))}
    </Box>
  );
};

export default CategorieListMobile;
