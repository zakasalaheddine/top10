import { Image } from "@chakra-ui/image";
import { Box, Circle, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Author = () => {
  return (
    <>
      <Flex align="center" mt={["16px", "16px", "29px"]}>
        <Circle w={["40px", "64px"]} h={["40px", "64px"]} overflow="hidden">
          <Image src="/images/Rectangle51.jpg" />
        </Circle>
        <Box ml={2}>
          <Text fontSize={["sm", "lg"]}>Kerstin Kuhn</Text>
          <Text fontSize={["sm", "lg"]} display={["none", "block"]}>
            Last updated Jan 03, 2021
          </Text>
        </Box>
      </Flex>
      <Text fontSize={["sm", "lg"]} mt="6px" display={["block", "none"]}>
        Last updated Jan 03, 2021
      </Text>
    </>
  );
};

export default Author;
