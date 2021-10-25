import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const TextIcon = ({ icon, children }) => {
  return (
    <Flex align="center" mb={2}>
      <Box>{icon}</Box>
      <Text fontSize={["md", "lg"]} ml={2}>
        {children}
      </Text>
    </Flex>
  );
};

export default TextIcon;
