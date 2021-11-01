import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import Card from "../Card/Card";

const CategorieListMobile = ({ categories }) => {
  return (
    <Box display={["block", "block", "none"]}>
      {categories.map((categorie, i) => (
        <Card
          key={i}
          itemType="categorie"
          icon={categorie.icon.url}
          title={categorie.name}
        >
          <Text>{categorie.description}</Text>
        </Card>
      ))}
    </Box>
  );
};

export default CategorieListMobile;
