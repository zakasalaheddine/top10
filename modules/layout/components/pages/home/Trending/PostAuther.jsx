import React from "react";
import styled from "@emotion/styled";
import { Circle, Flex, Text } from "@chakra-ui/layout";
import { GoQuote } from "react-icons/go";

const PostAuther = ({ author, date }) => {
  return (
    <PostAuthorContainer justify={["center", "start"]}>
      <Flex mr="6%">
        <IconContainer>
          <GoQuote size="12px" />
        </IconContainer>
        <P>{author}</P>
      </Flex>
      <P>{date}</P>
    </PostAuthorContainer>
  );
};

export default PostAuther;

const PostAuthorContainer = styled(Flex)`
  align-items: center;
`;
const IconContainer = styled(Circle)`
  width: 17px;
  height: 17px;
  color: #fff;
  background-color: #ff5428;
  margin-right: 8px;
`;
const P = styled(Text)`
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.8);
`;
