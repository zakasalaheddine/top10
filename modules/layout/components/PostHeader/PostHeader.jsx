import React from "react";
import styled from "@emotion/styled";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Author from "./Author";

const PostHeader = () => {
  return (
    <PostContainer
      flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
    >
      <Box mr={["0", "0", "0", "4%"]} w={["100%", "100%", "100%", "45%"]}>
        <Text fontWeight="bold" fontSize={["lg", "2xl", "4xl"]}>
          10 Best Meal Kit Delivery Services for No-Hassle Healthy Meals at Home
        </Text>
        <Author />
      </Box>
      <AspectRatio
        w={["100%", "100%", "100%", "55%"]}
        mb={["8px", "12px", "16px", "0"]}
        maxW="460px"
        ratio={3 / 4}
      >
        <Image src="/images/Rectangle51.jpg" borderRadius="15px" />
      </AspectRatio>
    </PostContainer>
  );
};

export default PostHeader;

//styled components
const PostContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
